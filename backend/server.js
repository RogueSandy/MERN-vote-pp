require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')
const handle = require('./controllers')

const app = express()
const port = process.env.PORT

// middleware
app.use(cors())
app.use(bodyParser.json())

// routes
app.use((req,res, next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.poll)

app.use(handle.notFound)
app.use(handle.errors)

// connecting to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => console.log('connected to db & listening on port ' + port))
    })
    .catch((error) => {
        console.log(error)
    })