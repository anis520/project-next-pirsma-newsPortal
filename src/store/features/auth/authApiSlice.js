import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const root = "http://localhost:3000";
// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    console.log(data);
    const response = await axios.post(root + "/api/user/registration", data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// register user
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  try {
    console.log(data);
    const response = await axios.post(root + "/api/user/login", data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get  user info
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get(root + "/api/user/profile/details", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// get  user info
export const getLogout = createAsyncThunk("auth/getLogout", async () => {
  try {
    const response = await axios.get(root + "/api/user/logout", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
