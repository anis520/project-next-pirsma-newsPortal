import { createSlice } from "@reduxjs/toolkit";
import {
  addCategorys,
  getAllCategorys,
  getDeleteCategorys,
  getPayment,
  getsubscriber,
} from "./newsApiSlice";

// create news slice
const newsSlice = createSlice({
  name: "news",
  initialState: {
    message: null,
    categorys: null,
    error: null,
    loader: false,
    subscribers: null,
    methods: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setMethods: (state) => {
      state.methods = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // addCategorys
      .addCase(addCategorys.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(addCategorys.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(addCategorys.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.categorys.push(action.payload.category);
        state.loader = false;
      })
      // getAllCategorys
      .addCase(getAllCategorys.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getAllCategorys.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllCategorys.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.categorys = action.payload.categorys;
        state.loader = false;
      })

      // getAllCategorys
      .addCase(getDeleteCategorys.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getDeleteCategorys.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getDeleteCategorys.fulfilled, (state, action) => {
        state.message = action.payload.message;
        // (state.categorys[
        //   state.categorys.findIndex(
        //     (data) => data.id == action.payload.category.id
        //   )
        // ] = action.payload.category),
        (state.categorys = state.categorys.filter(
          (item) => item.id != action.payload.category.id
        )),
          (state.loader = false);
      })
      // get payment
      .addCase(getPayment.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getPayment.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getPayment.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.methods = action.payload.data.desc;
        state.loader = false;
      })
      // getsubscriber
      .addCase(getsubscriber.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getsubscriber.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getsubscriber.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.subscribers = action.payload.data;
        state.loader = false;
      });
  },
});

// selectors
export const getNewsData = (state) => state.news;
// actions
export const { setMessageEmpty, setMethods } = newsSlice.actions;

// export
export default newsSlice.reducer;
