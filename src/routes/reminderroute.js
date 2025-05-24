const express = require('express');
const Reminder = require('../models/Reminder');

const router = express.Router();


//making a new reminder through this post request in the database.
router.post('/', async (req, res) => {
    try {
        const { date, time, message, messageType, createdAt } = req.body;

        if (!date || !time || !message || !messageType ) {
            return res.status(400).send("All fields are required");
        }

        const newReminder = new Reminder({ date, time, message, messageType});
        await newReminder.save();

        res.status(201).json({ message: "Reminder is Saved", data: newReminder });
    } catch (err) {
        console.log(err);
        res.status(501).send("Something went Wrong");
    }
});

// here patch is used for partially updating the reminder feild as i just want to update the complete status.
router.patch('/:id/complete', async (req, res) => { 
    try {
        const reminder = await Reminder.findByIdAndUpdate(
            req.params.id,
            { completed: true },
            { new: true }
        );
        if (!reminder) return res.status(404).send("Reminder not found");
        res.json({ message: "Reminder marked as completed", data: reminder });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating reminder");
    }
});

module.exports = router;