// Example exercise data
// data/exercises.js

// Example exercise data
const exercises = [
    { id: 1, name: 'Push-ups', category: 'Strength Training', duration: 10 },
    { id: 2, name: 'Running', category: 'Cardio', duration: 30 },
    { id: 3, name: 'Yoga', category: 'Flexibility', duration: 45 },
];

// Function to filter exercises by category
function filterExercisesByCategory(category) {
    return exercises.filter(exercise => exercise.category === category);
}

module.exports = {
    filterExercisesByCategory,
};

