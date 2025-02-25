Quizify - MERN Stack Exam Preparation App

📌 Project Overview

Quizify is a multi-user exam preparation platform where administrators (Quiz Masters) can create subjects, chapters, and quizzes, while users can register, attempt quizzes, and track their scores. The app ensures a structured approach to quiz management and performance tracking.

🚀 Features

Admin Features:

Admin login (pre-defined, no registration required)

Create, edit, and delete subjects

Create, edit, and delete chapters under subjects

Create, edit, and delete quizzes with multiple-choice questions (MCQs)

Set quiz duration and schedule

Search users, subjects, and quizzes

View performance analytics and summary charts

User Features:

User registration and login

Choose a subject and chapter to start a quiz

Timed quiz experience

View quiz scores and past attempts

Dashboard with performance insights

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

State Management: React Context API/Redux

Styling: CSS, Bootstrap/Tailwind

Charts & Visualization: Chart.js

📁 Folder Structure

Quizify/
│── backend/       # Express.js server
│   ├── models/    # Mongoose schemas
│   ├── routes/    # API endpoints
│   ├── controllers/ # Business logic
│   ├── config/    # Database and JWT configurations
│── frontend/      # React application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Views like Login, Dashboard, Quiz Page
│   │   ├── context/    # State management
│   ├── public/        # Static assets
│── .env              # Environment variables
│── package.json      # Dependencies & scripts
│── README.md         # Project documentation

⚡ Setup Instructions

Prerequisites:

Ensure you have the following installed:

Node.js & npm

MongoDB

🔹 Backend Setup

cd backend
npm install
cp .env.example .env  # Configure database & JWT secrets
npm start

🔹 Frontend Setup

cd frontend
npm install
npm start

🔗 API Endpoints

Method

Endpoint

Description

POST

/api/auth/register

User registration

POST

/api/auth/login

User login

GET

/api/subjects

Get all subjects

POST

/api/subjects

Create a new subject (Admin)

GET

/api/chapters/:subjectId

Get chapters by subject

POST

/api/quiz

Create a quiz (Admin)

GET

/api/quiz/:chapterId

Get quizzes for a chapter

POST

/api/quiz/attempt

Submit quiz attempt

GET

/api/quiz/scores/:userId

Get user's quiz scores

🎨 UI & User Flow

Landing Page: Welcome message & login/signup

User Dashboard: View available subjects, attempt quizzes, and see past scores

Admin Dashboard: Manage subjects, chapters, quizzes, and user data

Quiz Page: Timed MCQ-based quiz interface

Results Page: Quiz score summary and history

🎯 Future Enhancements

Implement leaderboard feature

Add real-time quiz updates

Enhance UI/UX with animations

📜 License

This project is open-source and free to use.

🤝 Contribution Guidelines

Feel free to fork this repository and contribute. Submit a pull request with improvements!

🔥 Made by Rajesh🚀

