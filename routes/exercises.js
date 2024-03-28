express = require('express');
const router = express.Router();

const exercisesData = require('../data/exercises');

// GET route for retrieving exercises
router.get('/', (req, res) => {
    res.json(exercisesData);
});

// Other routes for exercises as needed

module.exports = router;
