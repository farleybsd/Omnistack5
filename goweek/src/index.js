const express = require('express')

const app  = express()

app.get('/',(req,res) =>{
    return res.send({mensagem:'Hello Word'})
})

app.listen(3000,()=>{
    console.log('Server Start 3000')
})

//16:40