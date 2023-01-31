import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  try {
    const res = await axios.get(`/api/user/${id}`)
    return res.data
  } catch (error) {
    return error
  }
})

export const createUser = createAsyncThunk('user/createUser', async (user) => {
  try {
    const res = await axios.post(`/api/user`, user)
    return res.data
  } catch (error) {
    return error
  }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  try {
    const res = await axios.delete(`/api/user/${id}`)
    return res.data
  } catch (error) {
    return error
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
});

export default userSlice.reducer;
