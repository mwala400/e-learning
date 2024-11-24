import express from 'express';
import { 
  showRegisterForm, 
  handleRegistration, 
  showLoginForm, 
  handleLogin, 
  showHomePage, 
  showDashboard 
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', showHomePage);
router.get('/register', showRegisterForm);
router.post('/register', handleRegistration);
router.get('/login', showLoginForm);
router.post('/login', handleLogin);
router.get('/dashboard', showDashboard);

export default router;
