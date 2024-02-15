const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();

// Database connection
const { mongoURI } = require('./config/database');
mongoose.connect(mongoURI);

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
