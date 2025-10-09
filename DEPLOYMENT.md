# 🚀 Deployment Guide

## Quick Deploy (One Command)

### On Your Server:

```bash
# Copy files to your server first
scp -r . user@your-server:/tmp/defishard

# SSH into your server
ssh user@your-server

# Run deployment script
cd /tmp/defishard
sudo ./deploy.sh
```

---

## What the Script Does

✅ Installs Node.js, Nginx, PM2 (if not present)  
✅ Builds Next.js production site  
✅ Creates self-signed SSL certificate (365 days)  
✅ Configures Nginx with SSL on port 8080  
✅ Starts app with PM2 (auto-restart)  
✅ Configures firewall (if ufw present)  

---

## After Deployment

### Access Your Site:
- **HTTP**: `http://your-server-ip` (redirects to HTTPS)
- **HTTPS**: `https://your-server-ip:8080`

### Certificate Warning:
⚠️ Browser will show "Not Secure" (self-signed cert)  
→ Click **"Advanced"** → **"Proceed to site"**

---

## Useful Commands

```bash
# Check app status
pm2 status

# View logs
pm2 logs defishard

# Restart app
pm2 restart defishard

# Stop app
pm2 stop defishard

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/defishard-error.log
sudo tail -f /var/log/nginx/defishard-access.log

# Reload Nginx config
sudo nginx -t && sudo systemctl reload nginx
```

---

## Update Deployment

```bash
# On your server
cd /var/www/defishard

# Pull latest changes (if using git)
git pull

# Rebuild
npm install
npm run build

# Restart
pm2 restart defishard
```

---

## Custom Domain Setup

Edit `/etc/nginx/sites-available/defishard`:

```nginx
server_name your-domain.com www.your-domain.com;
```

Then reload Nginx:
```bash
sudo systemctl reload nginx
```

---

## Real SSL Certificate (Let's Encrypt)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate (stop Nginx first for port 80)
sudo systemctl stop nginx
sudo certbot certonly --standalone -d your-domain.com

# Update Nginx config
sudo nano /etc/nginx/sites-available/defishard

# Change SSL paths to:
ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

# Restart Nginx
sudo systemctl start nginx
```

---

## Firewall Ports

Required ports:
- **80** (HTTP, redirects to HTTPS)
- **8080** (HTTPS)

```bash
# Check firewall
sudo ufw status

# Open ports if needed
sudo ufw allow 80/tcp
sudo ufw allow 8080/tcp
sudo ufw enable
```

---

## Troubleshooting

### Site not loading?

```bash
# Check if Next.js is running
pm2 status

# Check if Nginx is running
sudo systemctl status nginx

# Check port 3000
curl http://localhost:3000

# Check port 8080
curl -k https://localhost:8080
```

### View error logs:

```bash
# App logs
pm2 logs defishard --lines 100

# Nginx logs
sudo tail -f /var/log/nginx/defishard-error.log
```

### Restart everything:

```bash
pm2 restart defishard
sudo systemctl restart nginx
```

---

## Uninstall

```bash
# Stop services
pm2 delete defishard
sudo systemctl stop nginx

# Remove files
sudo rm -rf /var/www/defishard
sudo rm /etc/nginx/sites-available/defishard
sudo rm /etc/nginx/sites-enabled/defishard
sudo rm -rf /etc/ssl/defishard

# Restart Nginx
sudo systemctl start nginx
```

---

## Requirements

**Minimum Server Specs:**
- Ubuntu 20.04+ / Debian 10+
- 1GB RAM
- 1 CPU core
- 10GB disk space

**Software:**
- Node.js 18+
- Nginx
- PM2
- OpenSSL

---

## Support

For issues, check:
- PM2 logs: `pm2 logs defishard`
- Nginx logs: `/var/log/nginx/defishard-error.log`
- Build logs: Check during `npm run build`

