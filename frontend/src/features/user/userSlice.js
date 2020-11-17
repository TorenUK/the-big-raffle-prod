import { createSlice } from "@reduxjs/toolkit";

// state

export const userSlice = createSlice({
  name: "user",
  initialState: "",

  reducers: {
    login: (state, action) => {
      return (state = action.payload);
    },
    logout: (state, action) => {
      return (state = "");
    },
  },
});

// actions
export const { login, logout } = userSlice.actions;

// selector
export const selectUser = (state) => state.user;

export default userSlice.reducer;
