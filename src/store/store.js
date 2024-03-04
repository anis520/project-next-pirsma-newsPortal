import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { getLoggedInUser } from "./features/auth/authApiSlice";

// create store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

store.dispatch(getLoggedInUser());
// export
export default store;
