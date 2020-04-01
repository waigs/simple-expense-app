import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../state/GlobalState";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>
        <strong>History</strong>
      </p>
      <ul className="list-group mb-3">
        {transactions.map(transaction => (
          <Transaction key={transaction.createdAt} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
