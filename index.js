const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const users = require('./routes/users');

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('./styles'));


// Logger Middleware
// function loggerMiddleware(req, res, next) {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// }
// app.use(loggerMiddleware);

// // Request Body Validator Middleware
// function validateRequestBody(req, res, next) {
//     const requiredFields = ['fname', 'lname', 'uname']; // Define the required fields here
//     const missingFields = requiredFields.filter(field => !(field in req.body));

//     if (missingFields.length > 0) {
//         return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
//     }

//     next();
// }

app.engine("wellness", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
      const rendered = content
      .toString()
      return callback(null , rendered)
    });
})

// Set views directory and view engine
app.set('views', './views');
app.set('view engine', 'wellness');




// Routes
const exercisesRouter = require('./routes/exercises');
const mealsRouter = require('./routes/meals');
const usersRouter = require('./routes/users');

app.get("/", (req, res) => {
    const options = {
    content: "this is my page",
};
res.render("users", options);
// res.send("testing")
});

app.use('/exercises', exercisesRouter);
app.use('/meals', mealsRouter);
app.use('/users', usersRouter);
app.use("/api/users", users);


app.post("/users", (req, res) => {
    res.send("received a POST request for user!")
    })
    // app.post('/users', validateRequestBody); // Apply request body validation middleware for POST requests to '/users'
    // app.patch('/users/:id', validateRequestBody); // Apply request body validation middleware for PATCH requests to '/users/:id'
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({ error: err.message });
      });

// Start the server
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
