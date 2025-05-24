const express = require('express');
require('dotenv').config();
const reminderroute = require('./routes/reminderroute');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(333, () => {
        console.log("Server is Running on port 333");
    });
})
.catch(err => console.error("❌ MongoDB connection error:", err));

app.use('/reminder', reminderroute); 

app.get('/', (req, res) => {
    res.send("Hello from 333");
});


