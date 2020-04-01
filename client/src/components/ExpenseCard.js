import React, { useContext } from "react";
import { GlobalContext } from "../state/GlobalState";
import currency from "../constants/currency";
import numberWithCommas from "../utils/format";

const ExpenseCard = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card alert alert-success">
          <div className="card-body">
            <h5 className="card-title">Income</h5>
            <h4>
              <strong>
                {currency.current}
                {numberWithCommas(income)}
              </strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="col-sm-6 ">
        <div className="card alert alert-danger">
          <div className="card-body">
            <h5 className="card-title">Expense</h5>
            <h4>
              <strong>
                {currency.current}
                {numberWithCommas(expense)}
              </strong>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
