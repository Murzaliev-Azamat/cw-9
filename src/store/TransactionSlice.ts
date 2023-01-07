import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Transaction, TransactionApi} from "../types";
import {
  addTransaction,
  deleteTransaction,
  fetchOneTransaction,
  fetchTransactions,
  updateTransaction
} from "./TransactionThunks";


interface TransactionState {
  transactions: Transaction[] | [];
  fetchAllLoading: boolean;
  fetchOneLoading: boolean;
  addLoading: boolean;
  updateLoading: boolean;
  deleteLoading: boolean;
  transaction: TransactionApi | null;
}

const initialState: TransactionState = {
  transactions: [],
  fetchAllLoading: false,
  fetchOneLoading: false,
  addLoading: false,
  updateLoading: false,
  deleteLoading: false,
  transaction: null,
}

export const TransactionSlice = createSlice({
  name: 'transaction',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
      state.fetchAllLoading = true;
    });
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.fetchAllLoading = false;
      state.transactions = action.payload;
    });
    builder.addCase(fetchTransactions.rejected, (state) => {
      state.fetchAllLoading = false;
    });
    builder.addCase(fetchOneTransaction.pending, (state) => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchOneTransaction.fulfilled, (state, action) => {
      state.fetchOneLoading = false;
      state.transaction = action.payload;
    });
    builder.addCase(fetchOneTransaction.rejected, (state) => {
      state.fetchOneLoading = false;
    });
    builder.addCase(updateTransaction.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateTransaction.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateTransaction.rejected, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(deleteTransaction.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteTransaction.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteTransaction.rejected, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(addTransaction.pending, (state) => {
      state.addLoading = true;
    });
    builder.addCase(addTransaction.fulfilled, (state) => {
      state.addLoading = false;
    });
    builder.addCase(addTransaction.rejected, (state) => {
      state.addLoading = false;
    });
  }
});

export const homeReducer = TransactionSlice.reducer;

export const selectTransactions = (state: RootState) => state.home.transactions;


