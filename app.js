const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')
const xssClean = require('xss-clean')


const app = express()

// rate-Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });


// package
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(limiter)





module.exports = app

