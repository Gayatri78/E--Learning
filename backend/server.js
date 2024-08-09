const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { User, Contact } = require('./mongo'); // Import User and Contact models
const jwtAuthMiddleware = require('./authmiddleware');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Function to generate a JWT token
const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '60h' });
};

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        // Generate JWT Token
        const token = generateToken({ id: newUser._id, email: newUser.email });

        res.status(201).json({ status: "success", token });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = generateToken({ id: user._id, email: user.email });

        res.status(200).json({ status: "success", token });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// Protected Route
app.get('/protected-route', jwtAuthMiddleware, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/learning', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection failed', err);
});

// Contact Form Submission Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message saved successfully!' });
    } catch (err) {
        console.error("Contact form error:", err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
