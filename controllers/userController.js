import User from '../models/userModel.js';

export const showRegisterForm = (req, res) => {
  res.render('register', { error: null });
};

export const handleRegistration = async (req, res) => {
  const { full_name, admission_number, email, phone_number, program_name, program_code, role, status, password } = req.body;

  try {
    await User.create({ full_name, admission_number, email, phone_number, program_name, program_code, role, status, password });
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'Registration failed. Please try again.' });
  }
};

export const showLoginForm = (req, res) => {
  res.render('login', { error: null });
};

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmailAndPassword(email, password);
    if (user) {
      res.redirect('/dashboard');
    } else {
      res.render('login', { error: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'An error occurred. Please try again.' });
  }
};

export const showHomePage = (req, res) => {
  res.render('home');
};

export const showDashboard = (req, res) => {
  res.render('dashboard');
};
