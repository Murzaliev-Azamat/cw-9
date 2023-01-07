import React, {useState} from 'react';
import {Category, TransactionApi} from "../../types";
import {expense, income} from "../../constants";

interface FormMutation {
  type: string,
  category: string;
  amount: string;
}

interface Props {
  onSubmit: (transaction: TransactionApi) => void;
  existingTransaction?: TransactionApi | null;
  isLoading?: boolean;
  categories: Category[]
}


const FormForTransaction: React.FC<Props> = ({onSubmit, existingTransaction, categories, isLoading= false}) => {
  const initialState = existingTransaction ? {...existingTransaction, amount: existingTransaction.amount.toString(), type: ''} : {type: '', amount: '', category: ''};
  const [transaction, setTransaction] = useState<FormMutation>(initialState);

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setTransaction(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      createdAt: (new Date()).toISOString(),
      amount: parseInt(transaction.amount),
      category: transaction.category,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <select name="type" onChange={onTextFieldChange}>
        <option value=''></option>
        <option value={income}>Income</option>
        <option value={expense}>Expense</option>
      </select>
      <select name="category" value={transaction.category} onChange={onTextFieldChange}>
        {categories.filter(category => category.type === transaction.type).map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <input
        className="d-block mt-2"
        type="number"
        name="amount"
        placeholder="Введите цену"
        value={transaction.amount}
        onChange={onTextFieldChange}
        required
      />
      <button type="submit" disabled={isLoading} className="d-block btn btn-primary mt-2">
        Save
      </button>
    </form>
  );
};

export default FormForTransaction;