'use strict';

const express = require('express')
const router = express.Router()

router.use('/info',    require('./info'))

module.exports = router