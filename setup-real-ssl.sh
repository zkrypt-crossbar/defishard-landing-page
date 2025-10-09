#!/bin/bash

###############################################################################
# Setup Real SSL Certificate with Let's Encrypt for DefiShard
# This replaces the self-signed certificate with a trusted one
###############################################################################

set -e

DOMAIN="defishard.com"
EMAIL="admin@defishard.com"  # Change this to your email

echo "🔒 Setting up Let's Encrypt SSL for $DOMAIN"
echo ""

# Check if domain resolves to this server
SERVER_IP=$(curl -s ifconfig.me)
DOMAIN_IP=$(dig +short $DOMAIN | tail -n1)

echo "📍 Server IP: $SERVER_IP"
echo "📍 Domain IP: $DOMAIN_IP"

if [ "$SERVER_IP" != "$DOMAIN_IP" ]; then
    echo "⚠️  WARNING: Domain $DOMAIN doesn't point to this server!"
    echo "   Please update your DNS A record to point to: $SERVER_IP"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install certbot if not present
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Stop Nginx temporarily (certbot needs port 80)
echo "🛑 Stopping Nginx temporarily..."
sudo systemctl stop nginx

# Get certificate
echo "🔐 Obtaining SSL certificate from Let's Encrypt..."
sudo certbot certonly \
    --standalone \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

# Update Nginx configuration to use Let's Encrypt certificate
echo "⚙️  Updating Nginx configuration..."

sudo tee /etc/nginx/sites-available/defishard > /dev/null << 'EOF'
# HTTP -> HTTPS redirect
server {
    listen 80;
    server_name defishard.com www.defishard.com;
    return 301 https://$host:8080$request_uri;
}

# HTTPS server on port 8080 with Let's Encrypt SSL
server {
    listen 8080 ssl http2;
    server_name defishard.com www.defishard.com;

    # Let's Encrypt SSL Configuration
    ssl_certificate /etc/letsencrypt/live/defishard.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/defishard.com/privkey.pem;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Next.js
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
        proxy_read_timeout 60s;
        proxy_connect_timeout 60s;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
EOF

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Start Nginx
echo "🚀 Starting Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

# Setup auto-renewal
echo "♻️  Setting up auto-renewal..."
sudo certbot renew --dry-run

# Add renewal hook to restart Nginx after renewal
RENEWAL_HOOK="/etc/letsencrypt/renewal-hooks/deploy/restart-nginx.sh"
sudo mkdir -p /etc/letsencrypt/renewal-hooks/deploy
sudo tee $RENEWAL_HOOK > /dev/null << 'EOF'
#!/bin/bash
systemctl reload nginx
EOF
sudo chmod +x $RENEWAL_HOOK

echo ""
echo "✅ ============================================="
echo "✅  Real SSL Certificate Installed!"
echo "✅ ============================================="
echo ""
echo "🔒 Your site is now secured with Let's Encrypt"
echo "📍 Visit: https://defishard.com:8080"
echo ""
echo "📝 Certificate Info:"
sudo certbot certificates
echo ""
echo "♻️  Auto-renewal: Enabled (runs twice daily)"
echo "🧪 Test renewal: sudo certbot renew --dry-run"
echo ""
echo "⚠️  Certificate expires in 90 days"
echo "   Certbot will auto-renew it before expiration"

