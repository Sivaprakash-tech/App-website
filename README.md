# Sandhya's College Website

A beautiful, romantic website built for Sandhya featuring Amrita Bangalore college theme with login verification.

## Features

- 🔐 Secure date of birth login verification
- 🎓 Beautiful college-themed design
- 💕 Romantic silhouettes and animations
- 📱 Fully responsive design
- 🚀 Production-ready build

## Login Credentials

- **Date of Birth**: 19072004

## Deployment Instructions for Ubuntu Server

### Prerequisites

Make sure your Ubuntu server has:
- Node.js (v16 or higher)
- nginx
- Git (optional)

### Installation Steps

1. **Install Node.js and nginx** (if not already installed):
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```

2. **Upload/Clone the project** to your server:
   ```bash
   # If using git
   git clone <your-repo-url>
   cd sandhya-website
   
   # Or upload the entire project folder to your server
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Make the deployment script executable**:
   ```bash
   chmod +x deploy.sh
   ```

5. **Run the deployment script**:
   ```bash
   ./deploy.sh
   ```

6. **Start nginx** (if not already running):
   ```bash
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy files to nginx directory**:
   ```bash
   sudo mkdir -p /var/www/sandhya-website
   sudo cp -r dist/* /var/www/sandhya-website/
   ```

3. **Configure nginx**:
   ```bash
   sudo cp public/nginx.conf /etc/nginx/sites-available/sandhya-website
   sudo ln -s /etc/nginx/sites-available/sandhya-website /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default  # Remove default site
   ```

4. **Test and reload nginx**:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Accessing the Website

Once deployed, access your website using your server's IP address:
- `http://your-server-ip`

### Security Notes

- The nginx configuration includes security headers
- Static assets are cached for performance
- The login system uses client-side validation (enhance with server-side for production)

### Customization

To customize the website:
1. Edit the source files in `src/`
2. Rebuild with `npm run build`
3. Copy the new `dist/` contents to `/var/www/sandhya-website/`

### Troubleshooting

- **Website not loading**: Check if nginx is running with `sudo systemctl status nginx`
- **404 errors**: Ensure the nginx configuration includes the `try_files` directive for React Router
- **Permission issues**: Make sure nginx has read permissions for `/var/www/sandhya-website/`

## Project Structure

```
sandhya-website/
├── src/
│   ├── components/
│   │   ├── LoginPage.tsx
│   │   └── CollegePage.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── nginx.conf
├── deploy.sh
└── README.md
```

## Technologies Used

- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Vite for building
- nginx for serving

---

Made with ❤️ for Sandhya