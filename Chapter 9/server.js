
// Cuando un archivo tiene mas de una funcion, se llama una de ellas con { nombreDeLaFuncion }
// En este caso, se llama a la funcion logger del archivo logEvents.js
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

app.use(logger);

app.use(cors(corsOptions)); // Cross Origin Resource Sharing

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/', require('./routes/root')); // root route
app.use('/employees', require('./routes/api/employees')); // exployees route

// 404 status and catch-all handler for any requests to an unknown route
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

app.use(errorHandler);

// Server Listen allways at the end of the file
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


