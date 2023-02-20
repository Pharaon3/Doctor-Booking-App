import { configureStore } from "@reduxjs/toolkit";
import currentDataReducer from "../features/currentData/currentData";

export default configureStore({
  reducer: {
    currentData: currentDataReducer,
  },
});
