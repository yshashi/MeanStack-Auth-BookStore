import express from 'express';
import { login, register, registerAdmin, resetPassword, sendEmail } from '../controllers/auth.controller.js';

const router = express.Router();

//register

router.post("/register", register);

//login
router.post("/login", login);

// register as Admin
router.post("/register-admin", registerAdmin );

// send reset emmail

router.post("/send-email", sendEmail);

//reset password
router.post("/reset-password", resetPassword )

export default router;