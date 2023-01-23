import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "hel",
  },
  reducers: {
    getUser: async (state, action) => {
      return state.user;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
