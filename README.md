# Simple-Blog-API

A RESTful Blog API built using Node.js, Express.js, and MongoDB. The project provides user authentication and blog post management with authorization to ensure users can only modify their own posts.

## Setup and Run Locally

### Prerequisites

* Node.js
* MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohamedsherif14/Simple-Blog-API.git
cd Simple-Blog-API
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

---

## Implemented Endpoints

### Authentication

| Method | Endpoint  | Description                   |
| ------ | --------- | ----------------------------- |
| POST   | /register | Register a new user           |
| POST   | /login    | Login and receive a JWT token |

### Posts

| Method | Endpoint   | Description                |
| ------ | ---------- | -------------------------- |
| GET    | /posts     | Retrieve all posts         |
| GET    | /posts/:id | Retrieve a specific post   |
| POST   | /posts     | Create a new post          |
| PATCH  | /posts/:id | Update a post (owner only) |
| DELETE | /posts/:id | Delete a post (owner only) |

---

## Database Choice

This project uses **MongoDB** as the database and **Mongoose** as the ODM (Object Data Modeling) library.

### Why MongoDB?

* Flexible document-based structure that fits blog content naturally.
* Easy integration with Node.js applications.
* Fast development process with minimal schema constraints.
* Scales well for applications that handle large amounts of content.
* Stores data in JSON-like documents, making it convenient to work with JavaScript objects.

MongoDB was chosen because it provides a simple and efficient way to manage users and blog posts while keeping development fast and maintainable.
