const express = require('express')
const { getBlogs, getBlog, createBlog, deleteBlog } = require('../controllers/blogController')

const router = express.Router()


//gets all blogs
router.get('/', getBlogs)

//gets single blog
router.get('/:id', getBlog)

//creates blog
router.post('/', createBlog)

//deletes blog
router.delete('/:id', deleteBlog)

//updates blog
router.put('/:id', deleteBlog)

module.exports = router