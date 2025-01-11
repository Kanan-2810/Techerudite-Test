
# Techerudite-Test

This repository contains both a Node.js backend and a React frontend for the Techerudite-Test application. Follow the steps below to set up and run the project locally.





## Run Locally

Clone the project

```bash
  git clone https://github.com/Kanan-2810/Techerudite-Test.git
```

Go to the backend project directory

```bash
  cd node-backend
```

Install dependencies

```bash
  npm install
```

Setup environment (Replace in .env)

```bash
  DATABASE_URL="mysql://<MYSQL_USER_NAME>:<MYSQL_PASSWORD>@localhost:3306/user_management"
```
Migrate database

```bash
  npx prisma migrate dev --name init
```

Start server

```bash
  node index.js
```

Go to the frontend project directory

```bash
  cd node-backend
```

Install dependencies

```bash
  npm install
```

Start server

```bash
  npm start
```

Project is up and running on port 3000
