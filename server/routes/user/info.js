'use strict';

const { getAuth } = require("firebase/auth");




const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    const auth = getAuth();
    const user = auth.currentUser;

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const uid = user.uid;

      
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.send(JSON.stringify({displayName : displayName, email: email, photoURL:photoURL, uid: uid}));
    res.end();
})

module.exports = router