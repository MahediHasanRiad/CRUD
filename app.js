const express = require('express')
// const dotEnv = require('dotenv')
const cors = require('cors')
const helmet = require('helmet')
const hpp = require('hpp')
const rateLimit = require('express-rate-limit')
const xssClean = require('xss-clean')
const routers = require('./src/Routers/routers')


const app = express()

// rate-Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });


app.use(express.urlencoded({extended: true}))
app.use(express.json())

// security package
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(limiter)



// add frontend
app.use(express.static('client/build'))
app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// ------------------------

// Routers
app.use('/Product', routers)



module.exports = app

