# Contributing to AlgoHunt

Thank you for considering contributing to **AlgoHunt**! We welcome all contributions, whether you're fixing bugs, adding new features, or improving documentation. Your contributions help us create a better platform for our users!

## Project Overview

**AlgoHunt** is a responsive platform that offers over **150 DSA-based problems** across **5+ platforms**, empowering **300+ active users** to enhance their data structures and algorithms (DSA) skills.

### Key Features:

- Implemented **Google login** with **JWT authentication** to ensure user data security.
- Filters for problems based on **difficulty** and **platform**, making it easier for users to find suitable challenges.
- Efficiently maintained 150+ problems through an **admin dashboard** utilizing **KnexJS** for server-database connections and real-time updates.
- Designed a user-friendly **UI/UX** that boosts user retention through personalized progress tracking.

### Technologies Used:

- ReactJS
- Node.js
- Express.js
- PostgreSQL
- Material UI
- Knex.js
- JavaScript
- CSS
- Google OAuth
- pgAdmin

### Deployed URL:

[https://algohunt.in](https://algohunt.in)

## Getting Started

To set up the project on your local machine, follow these steps:

1. **Fork the repository**:

   - Click the "Fork" button at the top-right corner of this page.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/Jai-Marothiya/AlgoHub.git
   cd AlgoHub

   ```

## Install Dependencies

1. **For the backend (Node.js)**:

   ```bash
   cd server
   npm install

   ```

2. **For the Frontend (React.js)**:
   ```bash
   cd client
   npm install
   ```

## Local Environment Setup
Both the client and server folders require a .env file for environment-specific configurations. Below are the instructions for setting up these files.

### Server Folder (.env)
You must create a .env file in the server folder to store environment variables. Use the following template to set up your .env file:
   ```bash
   # Server Configuration
   PORT=5000
   
   # PostgreSQL Database
   DATABASE_URL=postgres://postgres:${your_pg_password}@127.0.0.1/algohub
   PG_HOST="127.0.0.1"
   PG_USER="postgres"
   PG_PASSWORD= # Add your PostgreSQL password here
   PG_DATABASE=algohub
   
   # Google OAuth Credentials
   CLIENT_ID=1088957184358-6vg9gfngftpc85443sb1e55v4m1l4cb6.apps.googleusercontent.com
   
   # JWT Access Key
   REFRESH_SECRET_KEY=f74b5b600a2b67c4f0ed42d65bf7a14dd394fd527bb65eaf5730ac2098e6d7e2dc51e278f0235ad9f8a1cb4b6e9efddc6e348b92d6c6e771aca0ef3b4e6fcab3
   ```

### Client Folder (.env)
You must create a .env file in the client folder to store environment variables. Use the following template to set up your .env file:
   ```bash
   # Google auth Ceredentials
   REACT_APP_CLIENT_ID=1088957184358-6vg9gfngftpc85443sb1e55v4m1l4cb6.apps.googleusercontent.com
   ```

## Database Backup

You can download the current database backup using the link below:

[Download backup.sql](https://raw.githubusercontent.com/Jai-Marothiya/AlgoHub/refs/heads/master/server/backup.sql)

### How to Restore from Backup

To restore the database from the backup, you can use the following command:

```bash
psql -U [username] -d [database_name] -f server/backup.sql
```

## Run the project

1. **Start the backend server**:

   ```bash
   cd server
   npm start

   ```

2. **Start the frontend**:
   ```bash
   cd client
   npm start
   ```

## Access the Application

- Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

<br>

## Contribution Guidelines

We encourage contributions of all kinds! You don’t need to have knowledge of the entire tech stack to contribute. Here are some ways you can help:

- **Bug Fixes:** Identify and fix bugs.
- **New Features:** Implement new features based on open issues.
- **Documentation:** Improve the documentation to help users understand the project better.
- **UI Improvements:** Suggest or implement UI/UX improvements.

## Branching Strategy

When working on a feature or bug fix, please create a new branch:

```bash
git checkout -b feature/your-feature-name
```

## Reporting Issues

If you find a bug or have a feature request, please follow these steps:

1. **Check existing issues:** Ensure your issue hasn’t already been reported.
2. **Submit a new issue:** Use the provided issue template to describe the bug or feature.

## Submitting Pull Requests

To submit a pull request (PR), follow these steps:

1. **Create a branch for your changes.**
   ```bash
   git checkout -b feature/your-feature-name

   ```
2. **Make your changes and commit them:**

   ```bash
   git commit -m "Description of your changes"

   ```

3. **Push to your fork:**

   ```bash
   git push origin feature/your-feature-name

   ```

4. **Submit a pull request:**
   Go to your fork on GitHub and click "Compare & pull request."

5. Provide a detailed description of what your PR does and why it's necessary.

## Project Structure

Here’s a brief overview of the folder structure:

```bash
.
├── server/              # Backend source code
├── client/              # Frontend source code
├── README.md            # Project overview
├── CONTRIBUTING.md      # Contribution guidelines
├── LICENSE              # Project license
└── ...
```

## Acknowledgments
Thank you to all the contributors who have helped make AlgoHunt a better platform!
