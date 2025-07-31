#!/bin/bash

# Deployment script for Ubuntu server with nginx
# Make this file executable: chmod +x deploy.sh

echo "🚀 Starting deployment process..."

# Build the React application
echo "📦 Building React application..."
npm run build

# Create deployment directory
echo "📁 Setting up deployment directory..."
sudo mkdir -p /var/www/sandhya-website
sudo chown -R $USER:$USER /var/www/sandhya-website

# Copy built files to nginx directory
echo "📋 Copying files to nginx directory..."
sudo cp -r dist/* /var/www/sandhya-website/

# Copy nginx configuration
echo "⚙️ Setting up nginx configuration..."
sudo cp public/nginx.conf /etc/nginx/sites-available/sandhya-website

# Enable the site
sudo ln -sf /etc/nginx/sites-available/sandhya-website /etc/nginx/sites-enabled/

# Remove default nginx site if it exists
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "🔧 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Reload nginx
    echo "♻️ Reloading nginx..."
    sudo systemctl reload nginx
    
    echo "🎉 Deployment completed successfully!"
    echo "🌐 Your website should now be accessible at your server's IP address"
    echo ""
    echo "📝 Next steps:"
    echo "1. Make sure nginx is running: sudo systemctl status nginx"
    echo "2. Check if port 80 is open in your firewall"
    echo "3. Access your website using your server's IP address"
    echo ""
    echo "🔐 Login credentials:"
    echo "Date of birth: 19072004"
else
    echo "❌ Nginx configuration test failed. Please check the configuration."
    exit 1
fi