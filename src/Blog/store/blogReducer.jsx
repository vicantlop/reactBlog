import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const res = await axios.get('/api/blog');
    return res.data
  } catch (error) {
    return error
  }
})

export const fetchBlog = createAsyncThunk('blogs/fetchBlog', async (id) => {
  try {
    const res = await axios.get(`/api/blog/${id}`);
    return res.data
  } catch (error) {
    return error
  }
})

export const createBlog = createAsyncThunk('blogs/createBlog', async (blog) => {
  try {
    const res = await axios.post('/api/blog', blog)
    return res.data
  } catch (error) {
    return error
  }
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  try {
    console.log(id)
    const res = await axios.delete(`/api/blog/${id}`)
    return res.data
  } catch (error) {
    return error
  }
})

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blog = action.payload
    })
    .addCase(fetchBlog.fulfilled, (state, action) => {
      state.blog = action.payload
    })
    .addCase(createBlog.fulfilled, (state, action) => {
      state.blog = action.payload
    })
    .addCase(deleteBlog.fulfilled, (state, action) => {
      state.blog = action.payload
    })
  }
})

export default blogSlice.reducer;