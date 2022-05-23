'use strict';
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')

const express = require('express')
const router = express.Router()

// Lets user login to our application
router.post('/', (req,res) => {
    const auth = getAuth();
    const {email, password} = req.body

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        res.send(JSON.stringify({message : "Logged in Successfully", status : 200}));
        res.end();
    })
    .catch((error) => {
        res.send(JSON.stringify({message : error.message, status : 444}));
        res.end();
    });

})

module.exports = router