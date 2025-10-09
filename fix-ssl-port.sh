#!/bin/bash

###############################################################################
# Fix SSL to use standard port 443 instead of 8080
# This makes https://defishard.com work without :8080
###############################################################################

set -e

echo "🔧 Updating Nginx to use standard HTTPS port 443..."

# Update Nginx configuration to use port 443
sudo tee /etc/nginx/sites-available/defishard > /dev/null << 'EOF'
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

    # SSL Configuration (adjust path based on your certificate type)
    # For self-signed:
    ssl_certificate /etc/ssl/defishard/fullchain.pem;
    ssl_certificate_key /etc/ssl/defishard/privkey.pem;
    
    # For Let's Encrypt (uncomment these and comment above):
    # ssl_certificate /etc/letsencrypt/live/defishard.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/defishard.com/privkey.pem;
    
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

# Test configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Open port 443 in firewall if ufw is active
if command -v ufw &> /dev/null && sudo ufw status | grep -q "Status: active"; then
    echo "🔥 Opening port 443 in firewall..."
    sudo ufw allow 443/tcp
    
    # Optional: close port 8080 if you don't need it anymore
    read -p "Close port 8080 (no longer needed)? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo ufw delete allow 8080/tcp
    fi
fi

# Reload Nginx
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo ""
echo "✅ ============================================="
echo "✅  SSL Port Updated to 443!"
echo "✅ ============================================="
echo ""
echo "📍 Now access your site at:"
echo "   🌐 http://defishard.com  → redirects to HTTPS"
echo "   🔒 https://defishard.com  → SECURE (no port needed!)"
echo ""
echo "✅ Standard HTTPS port 443 is now active"

