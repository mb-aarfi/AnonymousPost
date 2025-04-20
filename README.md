# Anonymous Posting

A real-time chat application with anonymous posting capabilities, built with React, Node.js, Express, and PostgreSQL.

## Complete Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm (Node Package Manager)

## Core Dependencies for QNA-Threads

## Backend Core Dependencies

```bash
# Install in root directory
npm install @prisma/client@6.6.0    # Database ORM
npm install bcrypt@5.1.1            # Password hashing
npm install cors@2.8.5              # CORS middleware
npm install dotenv@16.5.0           # Environment variables
npm install express@4.21.2          # Web framework
npm install jsonwebtoken@9.0.2      # Authentication
npm install prisma@6.5.0            # Database toolkit
npm install socket.io@4.8.1         # Real-time communication
```

## Frontend Core Dependencies

```bash
# Install in client directory
npm install react@19.0.0            # UI library
npm install react-dom@19.0.0        # React DOM
npm install react-router-dom@7.5.0  # Routing
npm install axios@1.8.4             # HTTP client
npm install socket.io-client@4.8.1  # WebSocket client
npm install tailwindcss@3.4.1       # CSS framework
```


## Required Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/qna_threads"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## Installation Steps

1. Backend:
```bash
cd project-root
npm install
```

2. Frontend:
```bash
cd client
npm install
```

## Starting the Application

1. Start Backend:
```bash
npm run server
```

2. Start Frontend:
```bash
npm run dev
``` 
