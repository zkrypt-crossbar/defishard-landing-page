#!/bin/bash

###############################################################################
# DefiShard Landing Page Deployment Script
# - Builds Next.js production site
# - Configures Nginx with SSL on port 8080
# - Creates self-signed SSL certificate
###############################################################################

set -e  # Exit on error

# Configuration
DOMAIN="defishard.com"
APP_DIR="/var/www/defishard"
NGINX_CONF="/etc/nginx/sites-available/defishard"
SSL_DIR="/etc/ssl/defishard"
PORT=443  # Standard HTTPS port

echo "🚀 Starting DefiShard deployment..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
   echo "⚠️  Please run as root (sudo ./deploy.sh)"
   exit 1
fi

# Install dependencies if needed
echo "📦 Checking dependencies..."
command -v node >/dev/null 2>&1 || { 
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
}

command -v nginx >/dev/null 2>&1 || { 
    echo "Installing Nginx..."
    apt-get update
    apt-get install -y nginx
}

command -v pm2 >/dev/null 2>&1 || { 
    echo "Installing PM2..."
    npm install -g pm2
}

# Create application directory
echo "📁 Creating application directory..."
mkdir -p $APP_DIR
mkdir -p $SSL_DIR

# Copy files
echo "📋 Copying application files..."
rsync -av --exclude 'node_modules' --exclude '.next' --exclude '.git' ./ $APP_DIR/

# Install dependencies and build
echo "🔨 Building application..."
cd $APP_DIR
npm install --production=false
npm run build

# Generate self-signed SSL certificate
echo "🔐 Generating self-signed SSL certificate..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout $SSL_DIR/privkey.pem \
    -out $SSL_DIR/fullchain.pem \
    -subj "/C=US/ST=State/L=City/O=DefiShard/CN=$DOMAIN"

chmod 600 $SSL_DIR/privkey.pem
chmod 644 $SSL_DIR/fullchain.pem

echo "✅ SSL certificate generated at $SSL_DIR"

# Create Nginx configuration
echo "⚙️  Configuring Nginx..."
cat > $NGINX_CONF << 'EOF'
# HTTP -> HTTPS redirect
server {
    listen 80;
    server_name defishard.com www.defishard.com;
    return 301 https://$host$request_uri;
}

# HTTPS server on standard port 443
server {
    listen 443 ssl http2;
    server_name defishard.com www.defishard.com;

    # SSL Configuration
    ssl_certificate /etc/ssl/defishard/fullchain.pem;
    ssl_certificate_key /etc/ssl/defishard/privkey.pem;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;

    # Root directory
    root /var/www/defishard/out;
    
    # Access logs
    access_log /var/log/nginx/defishard-access.log;
    error_log /var/log/nginx/defishard-error.log;

    # Next.js proxy
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files optimization
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }

    # Public static files
    location /static {
        proxy_pass http://localhost:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # Favicon
    location = /favicon.ico {
        proxy_pass http://localhost:3000;
        access_log off;
        log_not_found off;
    }
}
EOF

# Enable site
ln -sf $NGINX_CONF /etc/nginx/sites-enabled/defishard

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx

# Setup PM2 to run Next.js
echo "🚀 Starting Next.js with PM2..."
cd $APP_DIR

# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'defishard',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    instances: 1,
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Stop if already running
pm2 delete defishard 2>/dev/null || true

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root

# Setup firewall (if ufw is installed)
if command -v ufw >/dev/null 2>&1; then
    echo "🔥 Configuring firewall..."
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw --force enable
fi

# Display status
echo ""
echo "✅ ============================================="
echo "✅  DefiShard deployed successfully!"
echo "✅ ============================================="
echo ""
echo "📍 Access your site at:"
echo "   🌐 HTTP:  http://defishard.com (auto-redirects to HTTPS)"
echo "   🔒 HTTPS: https://defishard.com"
echo ""
echo "📊 Useful commands:"
echo "   Check status:  pm2 status"
echo "   View logs:     pm2 logs defishard"
echo "   Restart:       pm2 restart defishard"
echo "   Stop:          pm2 stop defishard"
echo "   Nginx status:  systemctl status nginx"
echo "   Nginx logs:    tail -f /var/log/nginx/defishard-error.log"
echo ""
echo "📝 SSL Certificate (self-signed):"
echo "   Cert: $SSL_DIR/fullchain.pem"
echo "   Key:  $SSL_DIR/privkey.pem"
echo "   Valid for: 365 days"
echo ""
echo "⚠️  Browser will show security warning (self-signed cert)"
echo "   Click 'Advanced' -> 'Proceed to site' to access"
echo ""

