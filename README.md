# Job SeekerZ - Job Portal

Live Site: [Job SeekerZ](https://jobseekerz.netlify.app/)

A comprehensive job portal platform that facilitates seamless interaction between job seekers and employers. Built with React.js, Node.js, and MongoDB, this system provides full CRUD operations for managing job postings, user authentication, and streamlined job application processes.

## 🌟 Features

- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **Authentication System** - Email/password login, Google login, and account recovery
- **Job Management** - Complete CRUD operations for job postings
- **Advanced Search & Filters** - Search by title, filter by job type, experience level, and salary range
- **Application System** - Apply for jobs and track application status
- **Employer Dashboard** - Review applications, update job posts, and manage candidates
- **Security** - JWT-based authentication and protected routes

## 🛠️ Tech Stack

- **Frontend:**

  - React.js
  - Tailwind CSS
  - DaisyUI
  - Firebase Authentication

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for session management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- Firebase project credentials
- Git

## 🚀 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/MRiDuL-ICE/Job-SeekerZ.git
   cd Job-SeekerZ
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── assets/
│   ├── img/
│   ├── lottie/
│   └── react.svg
├── context/
├── firebase/
├── hooks/
│   ├── useAuth.jsx
│   ├── useAxiosSecure.jsx
│   └── userJobs.jsx
├── layout/
│   └── shared/
│       ├── Footer.jsx
│       ├── JobCard.jsx
│       ├── JobCardSkeleton.jsx
│       ├── NavBar.jsx
│       └── MainLayout.jsx
├── pages/
│   ├── AddJob/
│   ├── Home/
│   ├── JobApply/
│   ├── JobDetails/
│   ├── Login/
│   ├── MyApplications/
│   ├── MyPostedJobs/
│   ├── Register/
│   └── ViewApplications/
└── routes/
    ├── PrivateRoute.jsx
    └── router.jsx
```

## 🔐 Features Detail

### Public Pages

- **Home (/)**: Browse available job postings
- **Login & Register**: User authentication pages

### Protected Pages

- **All Jobs (/jobs)**: Complete job listing with search and filters
- **Job Details (/jobs/:id)**: Detailed job information
- **Add Job (/addjJob)**: Create new job postings
- **Apply for Job (/jobApply/:id)**: Submit job applications
- **My Applications (/myApplications)**: Track submitted applications
- **My Job Posts (/myPostedJobs)**: Manage posted jobs
- **Review Applications (/viewApplications/:id)**: Review and manage applications

## 🔨 Best Practices

- **Code Quality**: Modular components, clean code architecture
- **Security**: Protected routes, input validation, JWT authentication
- **Performance**: Lazy loading, optimized renders
- **Error Handling**: User-friendly error messages and loading states
- **Responsive Design**: Mobile-first approach using Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👏 Acknowledgments

- Firebase for authentication
- MongoDB for database
- Tailwind and DaisyUI for styling

## 📧 Contact

Your Name - abdulwahab22400@gmail.com
