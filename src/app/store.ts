import {configureStore} from "@reduxjs/toolkit";
import {homeReducer} from "../store/TransactionSlice";
import {categoryReducer} from "../store/CategorySlice";


export const store = configureStore({
  reducer:{
    home: homeReducer,
    category: categoryReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;