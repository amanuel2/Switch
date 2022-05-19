'use strict';
const { getAuth, updateProfile, createUserWithEmailAndPassword } = require('firebase/auth')
const { getDatabase, ref, set } = require("firebase/database");
const { AvatarGenerator } = require('random-avatar-generator');
const { fireapp, database } = require('../../util/db')

const express = require('express')
const router = express.Router()

// Lets user register to our application
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
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
            fullName: fullname
        });
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