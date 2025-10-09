#!/bin/bash

###############################################################################
# Update DefiShard Landing Page
# Run this after pulling new code from git
###############################################################################

set -e

echo "🔄 Updating DefiShard..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build Next.js
echo "🔨 Building application..."
npm run build

# Restart with PM2
echo "♻️  Restarting application..."
pm2 restart defishard

# Show status
echo ""
echo "✅ Update complete!"
pm2 status

echo ""
echo "📋 View logs: pm2 logs defishard"

