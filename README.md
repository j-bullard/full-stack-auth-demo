## README

### JWT and Cookie Authentication Full Stack App

**Overview**

This project demonstrates a basic full stack application using Express for the backend and React for the frontend. It implements JWT-based authentication with cookies for session management.

**Prerequisites**

- Node.js and npm
- A database (PostgreSQL)
- Basic understanding of Express, React, and JWT
- Docker (to launch compose.yaml)

**Getting Started**

1. **Clone the repository:**
   ```bash
   git clone git@github.com:j-bullard/full-stack-auth-demo.git
   ```
2. **Install dependencies:** This will install dependencies for the root directory and the backend (API) and frontend (UI) apps.
   ```bash
   cd full-stack-auth-demo
   npm install
   ```
3. **Generate JWT Secret:** A script has been provided that will generate the secret for you.

   ```
   cd api
   npm run generate-jwt-secret
   ```

   Copy and paste this in the .env file explain below.

4. **Set up environment variables:**
   Create a `.env` file in the root directory of the project and add the following variables:

   ```
   cd api
   mv .env.example .env
   ```

   ```
   # Environment variables

   JWT_SECRET=your_secret_key
   ```

5. **Go back to root directory**

   ```
   cd ..
   ```

6. **Launch Database using Docker:** A docker compose file has been provided that you can run either via the VS Code extension or CLI.

7. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start both the frontend and backend development servers.

**Authentication Flow**

1. **User registration:**
   - User provides credentials (username and password).
   - Backend (API) creates a new user and returns a success message.
2. **Login:**
   - User provides credentials.
   - Backend (API) verifies credentials and generates a JWT.
   - JWT is set as an httpOnly cookie.
   - User is redirected to the home page which is a protected route.
3. **Protected routes:**
   - Frontend (UI) checks for the presence of the JWT cookie.
   - If present, sends the cookie with requests to protected endpoints.
   - Backend (API) verifies the JWT and grants access to protected resources.
4. **Logout:**
   - Clear the JWT cookie on the client.
   - Redirect to the login page.

**Key Features**

- JWT-based authentication
- HttpOnly cookies for enhanced security
- User registration and login
- Protected routes using AuthGuard on Frontend (UI)
- Logout functionality

**Additional Considerations**

- Implement proper error handling and input validation.
- Consider using a more robust JWT library for additional features.
- Enhance security by adding features like password hashing, CSRF protection, and rate limiting.
- Optimize performance by caching and minimizing database queries.

**License**

This project is licensed under the MIT License.
