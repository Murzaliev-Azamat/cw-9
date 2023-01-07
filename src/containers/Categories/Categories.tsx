import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCategories} from "../../store/CategorySlice";
import {deleteCategory, fetchCategories} from "../../store/CategoryThunks";
import Category from "../../components/Category/Category";

const Categories = () => {
  // const navigate = useNavigate();
  const dispatch= useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const removeCategory = async (id: string) => {
    await dispatch(deleteCategory(id));
    await dispatch(fetchCategories());
  }

  return (
    <>
    <div className="d-flex align-items-center justify-content-between">
      <h3>Categories</h3>
      <Link to={"/add-category"} className="btn btn-success">Add</Link>
    </div>

  {categories.map((category) => (
          <Category key={category.id} name={category.name} type={category.type} id={category.id} onDelete={removeCategory} />
        ))}
    </>
  );
};

export default Categories;
