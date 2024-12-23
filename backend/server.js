const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/event_management')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/attendees', require('./routes/attendees'));
app.use('/api/tasks', require('./routes/tasks'));

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
