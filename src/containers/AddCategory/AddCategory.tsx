import React from 'react';
import FormForCategory from "../../components/FormForCategory/FormForCategory";
import {addCategory} from "../../store/CategoryThunks";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {CategoryApi} from "../../types";

const AddCategory = () => {
  const navigate = useNavigate();
  const dispatch= useAppDispatch();

  const addOneCategory = async (category: CategoryApi) => {
    await dispatch(addCategory(category));
    navigate('/categories');
  };

  return (
    <div>
      <h4 className="mt-2 mb-2">Add new category</h4>
      <FormForCategory onSubmit={addOneCategory}/>
    </div>
  );
};

export default AddCategory;