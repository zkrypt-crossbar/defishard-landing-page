#!/bin/bash

###############################################################################
# Update DefiShard Landing Page
# Run this FROM /var/www/defishard/ directory
###############################################################################

set -e

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from /var/www/defishard/"
    exit 1
fi

echo "🔄 Updating DefiShard..."
echo "📍 Working directory: $(pwd)"

# Pull latest code
echo "📥 Pulling latest code..."
git pull

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Clear Next.js cache
echo "🧹 Clearing cache..."
rm -rf .next

# Build Next.js
echo "🔨 Building application..."
npm run build

# Stop PM2 process
echo "🛑 Stopping old process..."
pm2 delete defishard 2>/dev/null || true

# Start fresh with PM2
echo "🚀 Starting application..."
pm2 start ecosystem.config.js
pm2 save

# Show status
echo ""
echo "✅ Update complete!"
pm2 status

echo ""
echo "📋 View logs: pm2 logs defishard"

