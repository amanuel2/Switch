'use strict';

const express = require('express')
const router = express.Router()

router.use('/google',    require('./google'))
router.use('/facebook',  require('./facebook'))
router.use('/apple',     require('./apple'))

router.post('/',(req,res)=>{
    console.log("HERE")
})

module.exports = router