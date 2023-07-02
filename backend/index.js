const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('🟢 Successfully connected to the database');
  })
  .catch((error) => {
    console.log('🔴 Error connecting to the database', error);
    process.exit(1);
  });

// Start your express server
app.listen(4000, () => {
  console.log('🚀 Server ready at http://localhost:4000');
});
