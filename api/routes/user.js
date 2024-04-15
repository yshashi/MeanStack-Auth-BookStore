import express from 'express';
import { getAllUsers, getById } from '../controllers/user.controller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
///get all
router.get('/', verifyAdmin, getAllUsers );

//get by id
router.get('/:id', verifyUser, getById);

export default router;