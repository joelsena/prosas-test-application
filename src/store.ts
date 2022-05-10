import { configureStore } from "@reduxjs/toolkit";

import DataReducer from "./features/data";

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
});
