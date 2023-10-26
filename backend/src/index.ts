const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config({ path: '../.env' });

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('🟢 Successfully connected to the database');
  })
  .catch((error: Error) => {
    console.error('🔴 Error connecting to the database', error);
    process.exit(1);
  });

// Start your express server
app.listen(4000, () => {
  console.log('🚀 Server ready at ' + process.env.BACKEND_URL);
});

