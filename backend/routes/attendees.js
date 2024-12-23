const express = require('express');
const router = express.Router();
const Attendee = require('../models/attendee');

// CRUD Operations
router.post('/', async (req, res) => {
    try {
        const attendee = new Attendee(req.body);
        await attendee.save();
        res.status(201).json(attendee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const attendees = await Attendee.find();
        res.status(200).json(attendees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Attendee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Attendee deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
