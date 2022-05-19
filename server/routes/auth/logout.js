'use strict';
const { getAuth, signOut } = require('firebase/auth')

const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    const auth = getAuth();
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    signOut(auth).then(() => {
        res.send(JSON.stringify({message : "Logged Out Successfully", status : 200}));
        res.end();
    }).catch((error) => {
        res.send(JSON.stringify({message : error.message, status : 444}));
        res.end();
    });
})

module.exports = router