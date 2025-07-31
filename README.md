 learning website deployment using node js with nignx server in ubuntu os system
 create a vm or instance in cloud 
 login into git bash 
 using key pair log in to vm public ip (ssh -i keypair.pem ubuntu(os)@ip addresss)
 install the updates (sudo apt update)
 use git clone to import the repo (git clone url)
 now the change the directory to files/repo downloaded from url(cd ex-app-web/mk-edify)
 use ls command to check the list of files/folders
 install the application related run time enviornment (node js/python/java)commands 
 Install the Application Dependencies 
Node Related Applications - package.json - npm install
Java Related Applications - pom.xml
Python Related Applications - requirements.txt
Install the Application Dependencies 
Node Related Applications - package.json - npm install
Java Related Applications - pom.xml
Python Related Applications - requirements.txt
Build the Application - Artifacts
Note: Before building Backend connect Database first then Build
For Node Application - npm run build
For Java Application - mvn
For Python Applications - pybuild
Host or Run the Application
Frontend: Host the Artifacts to Web Server [ nginx, apache, tomcat, caddy ….]
Backend: Run the Artifacts
Access the Application on Browser - Open ports in Security Groups
