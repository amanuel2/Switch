'use strict';

const express = require('express')
const { getAuth } = require("firebase/auth");
const router = express.Router()

// Used from client to verify if client is authenticated

router.post('/', (req,res) => {
    const auth = getAuth();
    const user = auth.currentUser;

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.send(JSON.stringify({is_authenticated : Boolean(user)}));
    res.end();
})

module.exports = router