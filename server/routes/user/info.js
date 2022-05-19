'use strict';

const { getAuth } = require("firebase/auth");
const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    const auth = getAuth();
    const user = auth.currentUser;

    let {displayName, email, photoURL, uid} = ["","","",""]

    if(user){
        displayName = user.displayName;
        email = user.email;
        photoURL = user.photoURL;
        uid = user.uid;
    }

      
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.send(JSON.stringify({displayName : displayName, email: email, photoURL:photoURL, uid: uid}));
    res.end();
})

module.exports = router