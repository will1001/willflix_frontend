import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auths",
  initialState: {
    user: JSON.parse(localStorage.getItem("state.user")) || null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //login
    loginStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  loginFailure,
  logout,
} = AuthSlice.actions;

export default AuthSlice.reducer;
