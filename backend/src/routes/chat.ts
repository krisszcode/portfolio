import express from 'express';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/to-do', authMiddleware, (req, res) => {
  res.send('This is a protected route.');
});

export default router;
