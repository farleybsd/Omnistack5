const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app  = express()
const Server = require("http").Server(app)
const io = require("socket.io")(Server)

mongoose.connect('mongodb+srv://rufino:32758485up@@cluster0-etzfl.mongodb.net/goweek?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use((req,res,next)=>{
    req.io = io
    return next()
})


app.use(cors())
app.use(express.json())
app.use(require('./routes'))

Server.listen(3000,()=>{
    console.log('Server Start 3000')
})

//34:38