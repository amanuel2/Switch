'use strict';
const { getAuth, updateProfile, createUserWithEmailAndPassword } = require('firebase/auth')
const { AvatarGenerator } = require('random-avatar-generator');


const express = require('express')
const router = express.Router()


router.post('/', (req,res) => {
    const auth = getAuth();
    const generator = new AvatarGenerator();
    const {fullname, username, email, password, confirm} = req.body

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: generator.generateRandomAvatar()
          })
          .then(r => {
            res.send(JSON.stringify({message : "Updated Successfully", status : 200}));
            res.end();
          })
          .catch(error=> {
              console.log("ERROR")
            res.send(JSON.stringify({message : error.message, status : 409}));
            res.end();
          })
    })
    .catch((error) => {
        res.send(JSON.stringify({message : error.message, status : error.code}));
        res.end();
    });
})

module.exports = router