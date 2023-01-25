const dotenv = require("dotenv");
const path = require('path')
dotenv.config({path: path.resolve(__dirname, './.env')});

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

// init app & middleware
const app = express()
app.use(morgan('dev'))
app.use(express.json())

//connnect to db
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
