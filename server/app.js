const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys')



mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connected to mongo yeahh", err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT,()=>{
    console.log("server is running on " , + PORT)
})