const dotenv = require("dotenv");
const path = require('path')
dotenv.config({path: path.resolve(__dirname, './.env')});

const User = require('./user')

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

  //routes

app.post("/", async (req, res, next) => {
  const {firstName, lastName, username, password, email} = req.body
  try {
    const user = await User.create({firstName, lastName, username, password, email})
    res.status(200).json(user)
  } catch(error) {
    res.status(400).json({error: error.message})
    console.log(error)
  }

  res.json({mssg: "POST a new user"})
})