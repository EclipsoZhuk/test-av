import { createSlice } from "@reduxjs/toolkit";
import { authState } from "./store.interface";

const initialState: authState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice;
