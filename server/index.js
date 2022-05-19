'use strict';

let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let cors = require("cors");


// application
let app = express()

// enable environment values
require('dotenv').config({ allowEmptyValues: true })

// Parse the form data (application/x-www-form-urlencoded) and expose to req.body
app.use(bodyParser.urlencoded({ extended: true }))

// Enable CORS requests (server-client communication)
app.use(cors());


// Routes
app.use('/api', require('./routes'))


// Listen for requests
const server = app.listen(process.env.PORT, () => {
    console.warn(`Server started on ${process.env.PORT}`)
})

// Export server for testing
module.exports = server