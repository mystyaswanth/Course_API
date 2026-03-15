# Course Registration System

A **Full Stack Course Registration System** built using **Angular, Node.js, Express, and MongoDB**.
The application allows users to manage course records by performing **CRUD operations (Create, Read, Update, Delete)** through a modern **Single Page Application (SPA)** interface.

---

## 🚀 Features

* Add new courses
* View all available courses
* Edit course details
* Delete courses
* RESTful API integration
* Clean and responsive UI
* Angular Single Page Application (SPA)
* MongoDB database storage

---

## 🛠 Tech Stack

**Frontend**

* Angular
* HTML
* CSS
* Bootstrap

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

---

## 📁 Project Structure

```
CourseAPI
│
├── frontend (Angular)
│   ├── src/app
│   │   ├── courseadd
│   │   ├── courseedit
│   │   ├── courselist
│   │   ├── courseservice.ts
│   │   └── app.routes.ts
│
├── backend (Node.js + Express)
│   ├── controllers
│   │   └── coursecontroller.js
│   │
│   ├── models
│   │   └── course.js
│   │
│   ├── routes
│   │   └── courseroute.js
│   │
│   ├── dbconfig
│   │   └── dbconfig.js
│   │
│   ├── app.js
│   ├── package.json
│   └── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/course-registration-system.git
```

---

### 2️⃣ Setup Backend

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Create `.env` file:

```
port=3000
dburl=mongodb://localhost:27017/coursedb
```

Run the backend server:

```
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

### 3️⃣ Setup Frontend

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run Angular application:

```
ng serve
```

Open browser:

```
http://localhost:4200
```

---

## 🔗 API Endpoints

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| POST   | /api/v1/createcourse  | Add new course   |
| GET    | /api/v1/getallcourses | Get all courses  |
| GET    | /api/v1/getcourse/:id | Get course by ID |
| PUT    | /api/v1/updcourse/:id | Update course    |
| DELETE | /api/v1/delcourse/:id | Delete course    |

---

## 📊 Example Course Data

```
{
  "courseid": 101,
  "coursename": "Artificial Intelligence",
  "instructor": "Dr. John Smith",
  "credits": 4,
  "department": "Computer Science"
}
```

---

## 🏗 System Architecture

```
Angular Frontend
        │
        ▼
Node.js + Express REST API
        │
        ▼
MongoDB Database
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Building a **Single Page Application (SPA)**
* Developing **RESTful APIs**
* Connecting **Angular with Node.js backend**
* Performing **CRUD operations with MongoDB**
* Full Stack Application Development

---

## 📌 Future Improvements

* User authentication (Login / Signup)
* Course search functionality
* Pagination
* Dashboard analytics
* Deployment on cloud platforms

---

## 📄 License

This project is developed for **educational and learning purposes**.
