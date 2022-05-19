'use strict';

const express = require('express')
const router = express.Router()

router.use('/info',    require('./info'))
router.use('/verify',  require('./verify'))

module.exports = router