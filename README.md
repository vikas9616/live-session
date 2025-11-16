# live-session
A full-stack real-time session system (frontend + backend) built with React (Vite) + Node.js/Express + MongoDB.

## 🚀 Features
- Full MERN-stack live session system.
- Frontend: React (Vite) for starting and joining sessions.
- Backend: Node.js + Express APIs for handling session creation and management.
- MongoDB database for persisting session data.
- Real-time communication (e.g., WebSocket/Socket.io).
- Simple and extendable architecture.

## 🗂 Repository Structure
```
/live-session
│
├─ live-session-backend/        ← Express + Node.js backend
│     ├─ src/
│     ├─ routes/
│     ├─ models/
│     └─ …
│
└─ live-session-frontend/       ← React + Vite frontend
      ├─ src/
      ├─ assets/
      └─ …
```

## 🛠 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB (local or cloud)

---

## ⚙️ Installation & Setup

### 1. Backend Setup
```bash
cd live-session-backend
npm install

# Create .env file with:
# MONGO_URI=your_mongo_db_url
# JWT_SECRET=your_secret
# PORT=5000

npm run dev
```

### 2. Frontend Setup
```bash
cd live-session-frontend
npm install

# Create .env file with:
# VITE_API_BASE_URL=http://localhost:5000/api

npm run dev
```

---

## 📌 Environment Variables

### Backend (`live-session-backend/.env`)
```
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend (`live-session-frontend/.env`)
```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🎯 Usage
1. Start the backend server.
2. Start the frontend dev server.
3. Open the frontend in your browser.
4. Click **Start Session** to generate a session.
5. Share the session URL with other users.
6. Users can join and interact in real-time.

---

## ✅ Current Features
- Create live sessions.
- Store session data in MongoDB.
- Generate unique session IDs + URLs.
- React UI for session interaction.
- Backend REST APIs for session management.

---


---

## 🧰 Tech Stack
**Frontend:**  
- React + Vite  
- React Router  
- CSS / Tailwind (if added later)

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- dotenv  

---

## 🤝 Contributing
1. Fork the repo  
2. Create a branch: `feature/your-feature`  
3. Commit changes  
4. Create PR  

---

## 📜 License
This project is licensed under **MIT License**.

---

## 👨‍💻 Author
**Vikas Maurya (S)**  
Rajkiya Engineering College, Kannauj  
GitHub: https://github.com/vikas9616

