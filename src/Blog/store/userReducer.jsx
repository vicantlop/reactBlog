import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const userSlice = createSlice({
  name: "user",
  initialState: "hello",
  reducers: {
    createUser: async (state, action) => {
      console.log(action)
      try {
        const res = await axios.post('/api/user', action)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    getBooks: async (state, action) => {
      try {
        const res = await axios.get('/books')
        console.log(res)
      } catch (err) {
        console.log("bsd")
      }
    }
  },
});

export const { createUser, getBooks } = userSlice.actions;

export default userSlice.reducer;
