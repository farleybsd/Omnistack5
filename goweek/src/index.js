const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rufino:32758485up@@cluster0-etzfl.mongodb.net/goweek?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app  = express()

app.use(express.json())
app.use(require('./routes'))

app.listen(3000,()=>{
    console.log('Server Start 3000')
})

//34:38