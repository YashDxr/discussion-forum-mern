import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/user/redux/user-slice.js";

export const store = configureStore({
  reducer: userReducer,
});
