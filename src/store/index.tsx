import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { messageSlice } from "./messageSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    message: messageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
