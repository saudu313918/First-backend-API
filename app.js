const express = require('express')
const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/mydb'
const app = express()


mongoose.connect(URL, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const aliRouter = require('./routes/aliens')

app.use('aliens',aliRouter)

app.listen(8000, function(){
    console.log('Server Started')
})