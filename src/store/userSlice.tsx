import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./store.interface";

const initialState: userState = {
  infoProfile: {
    email: "john.doe@example.com",
    fullName: "Vlad Gonchar",
    subtitle: "Web Developer",
    description:
      "Welcome to my profile! I'm a passionate web developer with experience in building modern and responsive web applications. My goal is to create meaningful and user-friendly digital experiences.",
    country: "Ukraine",
    city: "Dnipro",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
