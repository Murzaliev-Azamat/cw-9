import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  Transaction,
  TransactionApi,
  TransactionsApiList
} from "../types";
import axiosApi from "../axiosApi";

export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'home/fetchAllTransactions',
  async () => {
    const transactionsResponse = await axiosApi.get<TransactionsApiList | null>('/transactions.json');
    const transactions = transactionsResponse.data;
    if (transactions === null) {
      return [];
    } else {
      return Object.keys(transactions).map(key => {
        const transaction = transactions[key];
        return {
          ...transaction,
          id: key
        }
      });
    }
  },
)

export const addTransaction = createAsyncThunk<void, TransactionApi>(
  'home/addOneTransaction',
  async ({createdAt,category,amount}) => {
    await axiosApi.post<TransactionApi>('/transactions.json', {createdAt: createdAt, amount: amount, category: category});
  }
);

export const fetchOneTransaction = createAsyncThunk<Transaction, string>(
  'home/fetchOneTransaction',
  async (id) => {
    const transactionResponse = await axiosApi.get<TransactionApi | null>('transactions/' + id + '.json');
    const transaction = transactionResponse.data;

    if (transaction === null) {
      throw new Error('Not found!')
    }

    return (
        {
          id: id,
          createdAt: transaction.createdAt,
          amount: transaction.amount,
          category: transaction.category,
        }
      )
  },
)

interface UpdateTransactionParams {
  id: string;
  transaction: TransactionApi;
}

export const updateTransaction = createAsyncThunk<void, UpdateTransactionParams>(
  'home/updateTransaction',
  async (params) => {
    await axiosApi.put("/transactions/" + params.id + '.json', params.transaction);
  }
);

export const deleteTransaction = createAsyncThunk<void, string>(
  'home/deleteTransaction',
  async (id) => {
    await axiosApi.delete('/transactions/' + id + '.json');
  }
);
