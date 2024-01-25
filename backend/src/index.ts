import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import registerRoutes from './routes/register'

dotenv.config({ path: '.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));


app.use(registerRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('🟢 Successfully connected to the database');
  })
  .catch((error) => {
    console.error('🔴 Error connecting to the database', error);
    process.exit(1);
  });

// Start your express server
app.listen(4000, () => {
  console.log('🚀 Server ready at ' + process.env.BACKEND_URL);
});
