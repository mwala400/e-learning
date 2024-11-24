import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.use('/', userRoutes);

// HOD Dashboard Routes
app.get('/hod-dashboard', (req, res) => {
  res.render('hodDashboard');  // Render 'hodDashboard.ejs' for the HOD dashboard
});

// HOD Feature Routes
app.get('/assign-module-teacher', (req, res) => res.send('Assign Module and Teacher Page'));
app.get('/add-program-timetable', (req, res) => res.send('Add Program Timetable Page'));
app.get('/assign-teacher-level', (req, res) => res.send('Assign Teacher to Level Page'));
app.get('/list-department-teachers', (req, res) => res.send('List Department Teachers Page'));
app.get('/students-per-department', (req, res) => res.send('Students per Department Page'));

// Teacher Dashboard Routes
app.get('/teacher-dashboard', (req, res) => {
  res.render('teacherDashboard');  // Render 'teacherDashboard.ejs' for the Teacher dashboard
});

// Teacher Feature Routes
app.get('/add-assignment', (req, res) => res.send('Add Assignment Page'));
app.get('/change-timetable-venue', (req, res) => res.send('Change Time & Venue Page'));
app.get('/program-timetable', (req, res) => res.send('Program Timetable Page'));
app.get('/announcements', (req, res) => res.send('Announcements Page'));
app.get('/view-grades', (req, res) => res.send('View Grades Page'));
app.get('/student-list', (req, res) => res.send('Student List Page'));

// Student Dashboard Routes
app.get('/student-dashboard', (req, res) => {
  res.render('studentDashboard'); // Render 'studentDashboard.ejs' for the Student dashboard
});

// Student Feature Routes
app.get('/view-schedule', (req, res) => res.send('View Schedule Page'));
app.get('/submit-assignment', (req, res) => res.send('Submit Assignment Page'));
app.get('/view-grades-student', (req, res) => res.send('View Grades Page'));
app.get('/request-leave', (req, res) => res.send('Request Leave Page'));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
