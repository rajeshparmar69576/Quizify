require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connDB = require('./config/db.config.js')

const app = express()
const PORT = process.env.PORT


// middlewares
app.use(express.json())
app.use(cors())


// routes
app.get('/', (req, res) => {
    res.send('Quizify Backend is Running!');
});

// mongo connection
connDB()

// listen
app.listen(PORT,()=>{
    console.log(`App is running on server http://localhost:${PORT}`)
})