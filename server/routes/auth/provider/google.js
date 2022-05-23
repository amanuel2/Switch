'use strict';

const express = require('express')
const router = express.Router()
const { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider } = require('firebase/auth')

router.post('/', (req,res)=> {
    console.log("IN SERVER")
    const auth = getAuth();
    auth.languageCode = 'it';

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });


    signInWithPopup(auth, 'google').then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      res.send(JSON.stringify({message : "Logged in Successfully", status : 200}));
      res.end();
      // ...
    }).catch((error) => {
      res.send(JSON.stringify({message : error.message, status : error.code}));
      res.end();
    });



})

module.exports = router