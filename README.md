# 🧩 TaskBoard Pro

**TaskBoard Pro** is a full-stack MERN application for project and task management with **user authentication**, **role-based access control**, **drag-and-drop task handling**, and **task filtering**.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- 🔐 Role-Based Access: **Admin** and **User**
- 🧑‍💼 Admin:
  - Create, update, delete **any** task
  - View all users and their tasks
- 👤 User:
  - Create, update, delete **own** tasks only
- 📌 Task Management:
  - Mark tasks as **Completed** or **Pending**
  - **Drag & Drop** tasks to reorder
  - Filter by task status: All / Completed / Pending

---

## 🛠 Tech Stack

| Layer       | Tech                                 |
|-------------|--------------------------------------|
| Frontend    | React.js (Vite), Bootstrap 5, Axios  |
| Backend     | Node.js, Express.js, JWT             |
| Database    | MongoDB (Mongoose)                   |
| Auth        | JWT Tokens, Role-Based Middleware    |
| Drag & Drop | [@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd) |
| Deployment  | Vercel (Frontend) + Render (Backend) |

---

## 🧑‍💻 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Taskboard-pro.git
cd Taskboard-pro
```
```bash
cd server
npm install

```
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


```
```bash
cd server
npm install

```
```bash
npm run start


```
```bash
cd ../client
npm install

```
```bash
VITE_API_URL=https://your-render-backend-url/api


```
```bash
npm run dev


```
Deployment<br>
Frontend: Vercel

Backend: Render

