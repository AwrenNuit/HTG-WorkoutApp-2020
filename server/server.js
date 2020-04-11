const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

// Route includes
const exampleRouter = require('./routes/exampleRoute');

// Routes
app.use('/api/example', exampleRouter);


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Serve static files
app.use(express.static('build'));

// App Set
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
