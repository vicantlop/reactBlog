const mongoose = require('mongoose')
const User = require('../models/userModel')

//get all users
const getUsers = async(req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//get single user
const getUser = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "not a valid user id"})
  }

  try {
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}

//create a user
const createUser = async (req, res) => {
  //add doc to db
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "not a valid user id"})
  }

  try {
    const user = await User.findByIdAndDelete(id)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: "not a valid user id"})
  }
}

//update a user
const updateUser = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "not a valid user id"})
  }

  try {
    const user = await User.findByIdAndUpdate(id, {
      ...req.body
    })
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: "not a valid user id"})
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
}