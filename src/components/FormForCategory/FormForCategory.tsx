import React, {useState} from 'react';
import {CategoryApi} from "../../types";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {useAppSelector} from "../../app/hooks";
import {expense, income} from "../../constants";

interface FormMutation {
  type: string;
  name: string;
}

interface Props {
  onSubmit: (category: CategoryApi) => void;
  existingCategory?: CategoryApi | null;
  isLoading?: boolean;
}


const FormForCategory: React.FC<Props> = ({onSubmit,existingCategory,isLoading= false}) => {

  const initialState = existingCategory ? {...existingCategory} : {type: '', name: ''};
  const [category, setCategory] = useState<FormMutation>(initialState);

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setCategory(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type: category.type,
      name: category.name,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <select name="type" value={category.type} onChange={onTextFieldChange}>
        <option value=''></option>
        <option value={income}>Income</option>
        <option value={expense}>Expense</option>
      </select>
      <input
        className="d-block mt-2"
        type="text"
        name="name"
        placeholder="Введите название"
        value={category.name}
        onChange={onTextFieldChange}
        required
      />
      <button type="submit" disabled={isLoading} className="d-block btn btn-primary mt-2">
        Save
      </button>
    </form>
  );
};

export default FormForCategory;