# COLORS-Lab_Version-Control
In the COLORS Lab, you have already designed and implemented a web application using the LAMP stack -- this assignment focuses on organizing and documenting your existing work using version control.

COLORS is a full-stack web application that was developed using the LAMP stack.
The application allows users to log in with valid credentials, add a color, and search for an added color.

This project demonstrates LAMP stack configuration, MySQL database design, and remote deployment using a public domain.

Phase 1 - Digital Ocean + Lamp Setup (Get a remote Linux server running LAMP stack on Digital Ocean)
  1. Provision a LAMP droplet on DigitalOcean. The droplet includes Ubuntu, Apache, MySQL, and PHP.
  2. Get a domain and point that domain's DNS A-record to the droplet's public IP.
  3. SSH into the server and navigate to /var/www/html and create the required directories (css/, images/, js/, LAMPAPI/).
  4. Create the MySQL database and the required tables (Users, Colors, Contacts), and a database user with the proper privilages.
  5. Upload the API endpoint files to LAMPAPI/.
  6. Update database credentials inside the PHP API files.
  7. Test the API endpoints using Postman or CURL or Swagger.
  8. Upload the frontend files to the /var/www/html directory.
  9. Access the web application using this url: http://cop4331-jeremiahr.xyz/

Assumptions & Limitations
  - This project is designed for academic demonstration purposes.
  - Assumes there is a working LAMP environment.

License
This project is licensed under the Apache License Version 2.0.
