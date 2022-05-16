'use strict';

let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let cors = require("cors");
const { initializeApp } = require('firebase/app')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9TWrqSMEdPabrUlCfJlF_PUZoh4hbV0o",
    authDomain: "switch-6613a.firebaseapp.com",
    projectId: "switch-6613a",
    storageBucket: "switch-6613a.appspot.com",
    messagingSenderId: "484379287329",
    appId: "1:484379287329:web:9feb0df8c6ac911972e860",
    measurementId: "G-P7HM7BBD7S"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);

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