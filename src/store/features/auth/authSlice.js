import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  getLoggedInUser,
  getLogout,
  getVerifyOtp,
  userLogin,
} from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      // !localStorage.getItem("user") == undefined
      //   ? JSON.parse(localStorage.getItem("user"))
      //   :
      null,
    message: null,
    categorys: [],
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },

    setLogout: (state) => {
      state.message = null;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // createuser
      .addCase(createUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false;
        localStorage.setItem(
          "email",
          JSON.stringify(action.payload.user.email)
        );
      })
      // userLogin
      .addCase(userLogin.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loader = false;
        // localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      // getVerifyOtp
      .addCase(getVerifyOtp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getVerifyOtp.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getVerifyOtp.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loader = false;
        // localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      // get user info
      .addCase(getLoggedInUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
        state.user = null;
        // localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.loader = false;
        // localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      // get user info
      .addCase(getLogout.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getLogout.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
        state.user = null;
        localStorage.removeItem("user");
      })
      .addCase(getLogout.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        state.loader = false;
        localStorage.removeItem("user");
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;
// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
