import React from 'react';

const EditTransaction = () => {
  return (
    <div>
      edit
    </div>
  );
};

export default EditTransaction;

// import React, {useEffect} from 'react';
// import {useNavigate, useParams} from "react-router-dom";
// import FormForCategory from "../../components/FormForCategory/FormForCategory";
// import {useAppDispatch, useAppSelector} from "../../app/hooks";
// import {selectFetchOneLoading} from "../../store/TransactionSlice";
// import { DishApi} from "../../types";
// import Spinner from "../../components/Spinner/Spinner";
// import {fetchOneDish, updateDish} from "../../store/HomeThunks";
// import {selectOneDish} from "../../store/TransactionSlice";
//
// const EditTransaction = () => {
//   const {id} = useParams();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const dish = useAppSelector(selectOneDish);
//   const fetchOneLoading = useAppSelector(selectFetchOneLoading);
//
//
//   useEffect(() => {
//     if (id) {
//       dispatch(fetchOneDish(id));
//     }
//   }, [dispatch, id]);
//
//   const onSubmit = async (dish: DishApi) => {
//     if (id) {
//       await dispatch(updateDish({id, dish}));
//       navigate('/admin/dishes');
//     }
//   };
//
//   return (
//     <>
//       <div>
//         {dish && (
//           <>
//             <h4 className="mt-2 mb-2">EditTransaction meal</h4>
//             {fetchOneLoading ? <Spinner/> : <FormForCategory existingDish={dish} onSubmit={onSubmit}/>}
//           </>)}
//       </div>
//     </>
//   );
// };
//
// export default EditTransaction;