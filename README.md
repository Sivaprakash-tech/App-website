 

## 🌐 Node.js Web App Deployment with NGINX on Ubuntu (Cloud VM)

### 🖥️ 1. Create a VM Instance on a Cloud Provider

* Use any cloud provider: **AWS EC2**, **GCP Compute Engine**, **Azure VM**, etc.
* Choose Ubuntu OS.
* Generate or use an existing **key pair** for SSH access.

---

### 🔐 2. Connect to the VM via SSH

Open **Git Bash** or terminal and run:

```bash
ssh -i your-keypair.pem ubuntu@<your-vm-public-ip>
```

---

### 🔄 3. Update System Packages

Once logged into the VM:

```bash
sudo apt update && sudo apt upgrade -y
```

---

### 📥 4. Clone the GitHub Repository

```bash
git clone <your-repository-url>
cd ex-app-web/mk-edify  # Navigate to your app folder
ls                      # List the files to confirm
```

---

### 🔧 5. Install Required Runtime Environment

Install based on the project needs:

#### For Node.js:

```bash
sudo apt install nodejs npm -y
```

#### For Java:

```bash
sudo apt install openjdk-11-jdk maven -y
```

#### For Python:

```bash
sudo apt install python3 python3-pip -y
```

---

### 📦 6. Install Application Dependencies

#### Node.js:

```bash
npm install
```

#### Java:

```bash
mvn clean install
```

#### Python:

```bash
pip3 install -r requirements.txt
```

---

### 🏗️ 7. Build the Application (Create Artifacts)

> ⚠️ **Make sure your database is connected before building the backend**

#### Node.js:

```bash
npm run build
```

#### Java:

```bash
mvn package
```

#### Python:

```bash
pybuild
```

---

### 🚀 8. Host the Application

#### Frontend:

Use **NGINX** to host the frontend build:

```bash
sudo apt install nginx -y
sudo cp -r build/* /var/www/html/
sudo systemctl restart nginx
```

#### Backend:

Run the backend server using:

```bash
node server.js      # or your main app file
```

Use `pm2` or `nohup` to keep it running:

```bash
npm install -g pm2
pm2 start server.js
```

---

### 🌐 9. Access the Application

* Open the required **HTTP (port 80)** and **HTTPS (port 443)** ports in your **cloud provider’s security group/firewall**.
* Visit in browser:

  ```
  http://<your-vm-public-ip>
  ```

---
 
