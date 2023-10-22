import express from 'express';
import bcrypt from 'bcryptjs';
import { authMiddleware } from '../middleware/auth';
import { User } from '../models/User';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, 'kiskacsa');
  res.json({ token });
});

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    email
  });

  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, 'kiskacsa', {
    expiresIn: '1h',
  });

  res.json({ token, username });
});

router.post('/logout', authMiddleware, (req, res) => {
  res.json({ message: 'Logged out' });
});

export default router;
