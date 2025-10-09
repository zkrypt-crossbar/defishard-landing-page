# SSL Setup Commands

## Install Certbot
```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

## Stop Nginx
```bash
sudo systemctl stop nginx
```

## Get SSL Certificate
```bash
sudo certbot certonly --standalone --non-interactive --agree-tos --email admin@defishard.com -d defishard.com -d www.defishard.com
```

## Update Nginx Config
```bash
sudo nano /etc/nginx/sites-available/defishard
```

Change these lines:
```nginx
ssl_certificate /etc/letsencrypt/live/defishard.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/defishard.com/privkey.pem;
```

## Start Nginx
```bash
sudo nginx -t
sudo systemctl start nginx
```

## Setup Auto-Renewal
```bash
sudo certbot renew --dry-run
```

