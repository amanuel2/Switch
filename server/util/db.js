const { initializeApp } = require('firebase/app')
const { getDatabase }   = require("firebase/database");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9TWrqSMEdPabrUlCfJlF_PUZoh4hbV0o",
    authDomain: "switch-6613a.firebaseapp.com",
      // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://switch-6613a-default-rtdb.firebaseio.com/",
    projectId: "switch-6613a",
    storageBucket: "switch-6613a.appspot.com",
    messagingSenderId: "484379287329",
    appId: "1:484379287329:web:9feb0df8c6ac911972e860",
    measurementId: "G-P7HM7BBD7S"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(fireapp);

module.exports = {
    fireapp,
    database
}