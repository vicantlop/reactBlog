import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {}
  },
  reducers: {
    createBlog: async (state, action) => {
      try {
        const res = await axios.post('/api/blogs', action)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export const { createBlog } = blogSlice.actions;

export default blogSlice.reducer;