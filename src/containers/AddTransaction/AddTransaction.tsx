import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {TransactionApi} from "../../types";
import {addTransaction} from "../../store/TransactionThunks";
import FormForTransaction from "../../components/FormForTransaction/FormForTransaction";
import {selectCategories} from "../../store/CategorySlice";
import {fetchCategories} from "../../store/CategoryThunks";

const AddTransaction = () => {
  const navigate = useNavigate();
  const dispatch= useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const addOneTransaction = async (transaction: TransactionApi) => {
    await dispatch(addTransaction(transaction));
    navigate('/');
  };

  return (
    <div>
      <h4 className="mt-2 mb-2">Add new category</h4>
      <FormForTransaction onSubmit={addOneTransaction} categories={categories}/>
    </div>
  );
};

export default AddTransaction;
