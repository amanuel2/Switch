'use strict';

const express = require('express')
const router = express.Router()

router.use('/login',    require('./login'))
router.use('/register', require('./register'))
router.use('/logout',   require('./logout'))
router.use('/provider', require('./provider'))

module.exports = router