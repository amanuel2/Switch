'use strict';
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth')

const express = require('express')
const router = express.Router()


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
        res.send(JSON.stringify({message : "Updated Successfully", status : 200}));
        res.end();
    })
    .catch((error) => {
        res.send(JSON.stringify({message : error.message, status : error.code}));
        res.end();
    });

})

module.exports = router