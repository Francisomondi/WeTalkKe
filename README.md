# 💬 WeTalk

A modern real-time chat application built with the MERN Stack, Socket.IO, Zustand, DaisyUI, and Cloudinary.

Users can register, log in securely, update profiles, send real-time messages, share images, view online users, and customize the application theme.

---

## 🚀 Features

### Authentication & Security
- User Registration
- User Login
- JWT Authentication
- Secure HTTP-only Cookies
- Protected Routes
- User Logout

### Real-Time Messaging
- One-to-One Chat
- Instant Message Delivery using Socket.IO
- Online User Status
- Real-Time User Presence

### Profile Management
- Update Profile Picture
- Cloudinary Image Storage
- View Account Information
- Member Since Tracking

### User Experience
- Modern Responsive UI
- Mobile Friendly Design
- DaisyUI Themes
- Theme Persistence with LocalStorage
- Loading States & Skeleton Components
- Toast Notifications

### Media Sharing
- Image Uploads
- Cloudinary Integration
- Real-Time Image Messages

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Zustand
- Axios
- React Router DOM
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Cookie Parser
- Cloudinary
- BcryptJS

### Database
- MongoDB Atlas

### Deployment
- Render
- Vercel (Optional Frontend Deployment)

---

## 📂 Project Structure

```bash
WeTalk/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── constants/
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/wetalk.git

cd wetalk
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

Start Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

Backend runs on:

```bash
http://localhost:3000
```

---

## 🔑 Environment Variables

| Variable | Description |
|-----------|------------|
| PORT | Backend Port |
| MONGODB_URI | MongoDB Atlas Connection String |
| JWT_SECRET | JWT Secret Key |
| CLOUDINARY_CLOUD_NAME | Cloudinary Cloud Name |
| CLOUDINARY_API_KEY | Cloudinary API Key |
| CLOUDINARY_API_SECRET | Cloudinary API Secret |
| NODE_ENV | Application Environment |

---

## 📸 Screenshots

Add screenshots here:

### Login Page

![Login](screenshots/login.png)

### Chat Page

![Chat](screenshots/chat.png)

### Profile Page

![Profile](screenshots/profile.png)

### Settings Page

![Settings](screenshots/settings.png)

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint |
|----------|-----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/logout |
| GET | /api/auth/check-auth |
| PUT | /api/auth/update-profile |

---

### Messages

| Method | Endpoint |
|----------|-----------|
| GET | /api/messages/users |
| GET | /api/messages/:id |
| POST | /api/messages/send/:id |

---

## 🌟 Future Improvements

- Group Chats
- Voice Messages
- Video Calling
- Message Reactions
- Read Receipts
- Message Search
- Push Notifications
- User Blocking
- Typing Indicators
- End-to-End Encryption

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to GitHub

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Francis Omondi**

Software Developer | MERN Stack Developer | Mobile & Web Applications

GitHub: https://github.com/francisomondi

---

