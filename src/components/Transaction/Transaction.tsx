import React from 'react';
// import {addDishToOrder} from "../../store/TransactionSlice";
import {useAppDispatch} from "../../app/hooks";

interface Props {
  date: string;
  category: string;
  id: string;
  amount: number;
}

const Transaction: React.FC<Props> = ({date, amount, id, category}) => {
  const dispatch = useAppDispatch();

  // onClick={() => dispatch(addDishToOrder(id))}
  return (
    <div className="d-flex align-items-center justify-content-between p-2 border mt-2">
      <div className="d-flex align-items-center">
        <p className="me-2 m-0">{date}</p>
        <p className="m-0">{category}</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="m-0 me-2">{amount} KGS</p>
        <button className="btn btn-primary me-2">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Transaction;