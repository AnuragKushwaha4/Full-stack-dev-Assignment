# Internship Assignment – Full Stack Authentication App

## Overview

This project is a full-stack authentication system built using **Node.js, Express, MongoDB, and React**.
It allows users to **register, log in, and log out**, with authentication handled using **JWT tokens stored in HTTP cookies**.

The backend exposes REST APIs for authentication, while the frontend provides a simple UI for interacting with these APIs.

MongoDB is hosted on **MongoDB Atlas**, and the application can be deployed with the backend and frontend hosted separately.

---

## Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* cookie-parser
* CORS

### Database

* MongoDB Atlas

---

## Project Structure

```
InternshipAssignment
│
├── frontend
│   ├── src
│   │   ├── Http
│   │   │   └── index.js
│   │   ├── pages
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── routes
│   │   │   └── AppRoutes.jsx
│   │   └── styles
│   │       └── auth.css
│   │
│   ├── .env
│   └── package.json
│
├── backend
│   ├── Controllers
│   │   └── AuthController.js
│   ├── Models
│   │   └── UserModel.js
│   ├── Routes
│   │   └── AuthRoutes.js
│   ├── Configs
│   │   ├── Config.js
│   │   └── Connection.js
│   └── app.js
│
└── README.md
```

---

## Features

* User registration with validation
* Secure password hashing using bcrypt
* Login with JWT authentication
* Token stored in secure HTTP cookies
* Logout functionality
* Role selection (Admin / User)
* Simple dashboard after login
* React frontend connected to REST API

---

## API Endpoints

### Register User

POST `/api/auth/register`

Request Body

```json
{
  "name": "Anurag",
  "email": "user@email.com",
  "password": "123456",
  "phone": "9876543210",
  "role": "user"
}
```

Response

```
User created successfully
```

---

### Login User

POST `/api/auth/login`

Request Body

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

Response

```
User logged in successfully
```

JWT token is stored in an **HTTP cookie**.

---

### Logout User

POST `/api/auth/logout`

Clears the authentication cookie.

---

## Environment Variables

### Backend `.env`

```
PORT=8000
MONGO_URI=your_mongodb_atlas_connection
ACCESS_TOKEN_SECRET=your_jwt_secret
```

---

### Frontend `.env`

```
VITE_BACKEND_URL=http://localhost:8000/api
```

When deployed, this will point to the deployed backend URL.

---

## Running the Project Locally

### Clone Repository

```
git clone https://github.com/yourusername/InternshipAssignment.git
cd InternshipAssignment
```

---

### Backend Setup

```
cd backend
npm install
npm run dev
```

Server runs on

```
http://localhost:8000
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Authentication Flow

1. User registers an account
2. Password is hashed using bcrypt
3. User logs in with credentials
4. Backend generates JWT token
5. Token stored in HTTP cookie
6. User accesses dashboard
7. Logout clears authentication cookie

---

## Future Improvements

* Protected routes
* Role-based access control
* Form validation
* UI improvements
* Refresh token implementation

---

## Author

Anurag Kushwaha
B.Tech Computer Science
