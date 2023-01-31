const Blog = require('../models/blogModel')

//get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//get single blog
const getBlog = async (req, res) => {
  const { id } = req.params

  try {
    const blog = await Blog.findById(id)
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//create blog
const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete blog
const deleteBlog = async (req, res) => {
  const { id } = req.params

  try {
    const blog = await Blog.findByIdAndDelete(id)
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update blog
const updateBlog = async (req, res) => {
  const { id } = req.params

  try {
    const blog = await Blog.findByIdAndUpdate(id, {
      ...req.body
    })
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getBlog,
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
}