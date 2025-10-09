# 🚀 Deployment Guide

## Deploy

```bash
# On your server
cd /path/to/defishard-landing-page
sudo ./deploy.sh
```

---

## What the Script Does

✅ Installs Node.js, Nginx, PM2 (if not present)  
✅ Builds Next.js production site  
✅ Creates self-signed SSL certificate (365 days)  
✅ Configures Nginx with SSL on port 443 (standard HTTPS)  
✅ Starts app with PM2 (auto-restart)  
✅ Configures firewall (if ufw present)  

---

## After Deployment

### Access Your Site:
- **HTTP**: `http://defishard.com` (redirects to HTTPS)
- **HTTPS**: `https://defishard.com`

### Certificate Warning:
⚠️ Self-signed certificate - browser shows warning  
See `SSL_SETUP.md` for real SSL certificate

---

## Commands

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

## Update

```bash
cd /var/www/defishard
git pull
npm install
npm run build
pm2 restart defishard
```

---

## SSL Setup

See `SSL_SETUP.md` for Let's Encrypt commands

---

## Logs

```bash
pm2 logs defishard
sudo tail -f /var/log/nginx/defishard-error.log
```

