import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import user from "./userReducer";
import blog from "./blogReducer"

export default configureStore({
  reducer: {
    user,
    blog,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})