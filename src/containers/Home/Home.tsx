import React, {useEffect} from 'react';
import Transaction from "../../components/Transaction/Transaction";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectTransactions} from "../../store/TransactionSlice";
import {fetchTransactions} from "../../store/TransactionThunks";
import {Link} from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);


  return (

    <div>
      <div className="mt-2 mb-3 d-flex align-items-center justify-content-between">
        <h2>Finance Tracker</h2>
        <div>
          <Link to={'/categories'}>Categories</Link>
          <Link to={'/add-transaction'} className="ms-3">Add</Link>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="m-0">Total: KGS</h3>
      </div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} date={transaction.createdAt} category={transaction.category} id={transaction.id} amount={transaction.amount}/>
        ))}
    </div>
  );
};

export default Home;