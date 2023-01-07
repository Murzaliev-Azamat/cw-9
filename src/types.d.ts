export interface Transaction {
  id: string;
  category: string;
  amount: number;
  createdAt: string;
}

export interface TransactionApi {
  category: string;
  amount: number;
  createdAt: string;
}

export interface TransactionsApiList {
  [id: string]: TransactionApi;
}

export interface Category {
  id: string;
  name: string;
  type: string;
}

export interface CategoryApi {
  name: string;
  type: string;
}

export interface CategoriesApiList {
  [id: string]: CategoryApi;
}
