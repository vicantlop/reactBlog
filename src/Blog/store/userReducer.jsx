import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "hel",
  },
  reducers: {
    getUser: async (state, action) => {
      return state.user;
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

export const { getUser, getBooks } = userSlice.actions;

export default userSlice.reducer;
