# README: QuizKar (MERN Stack)

## Problem Statement
Educators and students lack a synchronized platform for quick assessment and real-time feedback. Manual grading is prone to errors and delays student learning.

## The Solution
QuizKar is a full-stack platform that automates the assessment cycle. It provides an intuitive interface for quiz creation, timed examinations, and automated result calculation with performance history.

## Tech Stack
- **Frontend:** React.js, Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, Bcrypt
- **State Management:** User-progress tracking to handle refreshes.

## Core Features
1. **Differentiated Roles:** Admin (Creators) and Users (Examinees).
2. **Dynamic Quiz Engine:** Create quizzes with metadata (Time limit, category, difficulty).
3. **Automated Grading:** Instant results upon submission.
4. **Historical Insights:** Dashboard showing past performances and improvement areas.

## Key Technical Challenge
**Handling Page Refreshes mid-quiz:** 
I implemented a persistence layer using local state and backend checks. If a student's browser closes, the current progress is stored, and they can resume without losing their timer or completed answers.

## Installation & Setup
1. Clone the repo.
2. `cd server && npm install && npm start`
3. `cd client && npm install && npm start`
4. Create a `.env` file in the server folder with `MONGO_URI` and `JWT_SECRET`.
