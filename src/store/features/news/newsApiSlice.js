import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const root = "http://localhost:3000";

// add  categorys
export const addCategorys = createAsyncThunk(
  "news/addCategorys",
  async (data) => {
    try {
      const response = await axios.post(root + "/api/category", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// get all  categorys
export const getAllCategorys = createAsyncThunk(
  "news/getAllCategorys",
  async () => {
    try {
      const response = await axios.get(root + "/api/category", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete categorys
export const getDeleteCategorys = createAsyncThunk(
  "news/getDeleteCategorys",
  async (data) => {
    try {
      const response = await axios.delete(
        root + "/api/category?id=" + data.id,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// payment
export const getPayment = createAsyncThunk("news/getPayment", async (data) => {
  try {
    const response = await axios.post(root + "/api/payment/payment", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// getsubscriber
export const getsubscriber = createAsyncThunk(
  "news/getsubscriber",
  async () => {
    try {
      const response = await axios.get(root + "/api/subscriber", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
