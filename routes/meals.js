express = require('express');
const router = express.Router();


const mealsData = require('../data/meals');

// GET route for retrieving meals
router.get('/', (req, res) => {
    res.json(mealsData);
});

// Other routes for meals as needed

module.exports = router;
