const express = require('express');
const router = express.Router();
const { filterExercisesByCategory } = require('../data/exercises');

// Route to get exercises filtered by category
router.get('/', (req, res) => {
    const { category } = req.query;

    if (!category) {
        return res.status(400).json({ error: 'Category parameter is required' });
    }

    const filteredExercises = filterExercisesByCategory(category);
    res.json(filteredExercises);
});

module.exports = router;

