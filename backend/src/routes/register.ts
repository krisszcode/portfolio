import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {

  const { email, password } = req.body;
  

  const emailRegex = /\S+@\S+\.\S+/;
  if (!email || !emailRegex.test(email)) {
    return res.status(200).json({ error: 'Invalid fields!' });
  }

  if (!password || password.length < 6) {
    return res.status(200).json({ error: 'Password must be at least 6 characters long!' });
  }


  res.status(200).json({ success: 'Email sent!' });
});

export default router;