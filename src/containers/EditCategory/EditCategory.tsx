import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import FormForCategory from "../../components/FormForCategory/FormForCategory";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {CategoryApi} from "../../types";
import Spinner from "../../components/Spinner/Spinner";
import {selectCategory} from "../../store/CategorySlice";
import {fetchOneCategory, updateCategory} from "../../store/CategoryThunks";

const Edit = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const category = useAppSelector(selectCategory);


  useEffect(() => {
    if (id) {
      dispatch(fetchOneCategory(id));
    }
  }, [dispatch, id]);

  const onSubmit = async (category: CategoryApi) => {
    if (id) {
      await dispatch(updateCategory({id, category}));
      navigate('/categories');
    }
  };

  return (
    <>
      <div>
        {category && (
          <>
            <h4 className="mt-2 mb-2">Edit meal</h4>
            <FormForCategory existingCategory={category} onSubmit={onSubmit}/>
          </>)}
      </div>
    </>
  );
};

export default Edit;