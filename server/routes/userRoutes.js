const express = require('express')

const router = express.Router()

const { createUser, getUsers, getUser, deleteUser, updateUser } = require("../controllers/userController");

//gets all users
router.get("/", getUsers)

//gets single user
router.get("/:id", getUser)

//creates user
router.post("/", createUser)

//deletes user
router.delete("/:id", deleteUser)

//updates user
router.put("/:id", updateUser)

module.exports = router;
