'use strict';

const express = require('express')
const router = express.Router()
const { getAuth, getRedirectResult, GoogleAuthProvider } = require('firebase/auth')


module.exports = router