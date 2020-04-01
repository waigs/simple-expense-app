import React, { useContext } from "react";
import { GlobalContext } from "../state/GlobalState";
import currency from "../constants/currency";
import numberWithCommas from "../utils/format";

const TransactionBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const totalAmount = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <p>Your Balance </p>
      <h1 className="display-4">
        {currency.current}
        {numberWithCommas(totalAmount)}
      </h1>
    </div>
  );
};

export default TransactionBalance;
