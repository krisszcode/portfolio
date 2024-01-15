import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;

  console.log(req.body);

  // TODO: Validate the email and password
  // TODO: Authenticate the user
  // TODO: Return a response

  res.status(200).json({ message: 'Login successful' });
});

export default router;