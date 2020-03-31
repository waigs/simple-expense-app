import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../state/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <p>
        <strong>History</strong>
      </p>
      <ul className="list-group mb-3">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
