import { configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";

export default configureStore({
  reducer: {
    user,
  }
})