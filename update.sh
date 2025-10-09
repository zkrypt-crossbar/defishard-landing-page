#!/bin/bash

###############################################################################
# Update DefiShard Landing Page
# Run this from your code directory (where you git pull)
###############################################################################

set -e

APP_DIR="/var/www/defishard"

echo "🔄 Updating DefiShard..."

# Pull latest code in current directory
echo "📥 Pulling latest code..."
git pull

# Copy files to deployment directory
echo "📦 Copying files to $APP_DIR..."
sudo rsync -av --exclude 'node_modules' --exclude '.next' --exclude '.git' ./ $APP_DIR/

# Change to deployment directory
cd $APP_DIR

# Install dependencies
echo "📦 Installing dependencies..."
sudo npm install

# Clear Next.js cache
echo "🧹 Clearing cache..."
sudo rm -rf .next

# Build Next.js
echo "🔨 Building application..."
sudo npm run build

# Stop PM2 process
echo "🛑 Stopping old process..."
sudo pm2 delete defishard 2>/dev/null || true

# Start fresh with PM2
echo "🚀 Starting application..."
sudo pm2 start ecosystem.config.js
sudo pm2 save

# Show status
echo ""
echo "✅ Update complete!"
pm2 status

echo ""
echo "📋 View logs: pm2 logs defishard"

