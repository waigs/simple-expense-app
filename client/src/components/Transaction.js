import React, { useContext } from "react";
import { GlobalContext } from "../state/GlobalState";
import currency from "../constants/currency";
import numberWithCommas from "../utils/format";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { _id, description, amount } = transaction;
  const sign = amount < 0 ? "-" : "+";
  const colorBalance = amount < 0 ? "danger" : "success";
  const listBg = amount < 0 ? "" : "bg-light";

  const onClickHandler = () => {
    deleteTransaction(_id);
  };
  return (
    <li className={`list-group-item d-flex justify-content-between ${listBg}`}>
      <div className="text-success">
        <span className={`text-${colorBalance}`}>
          <h6 className="my-0">{description}</h6>
          {sign}
          {currency.current}
          {numberWithCommas(Math.abs(amount))}
        </span>
      </div>
      <button
        type="button"
        className="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
        onClick={onClickHandler}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};

export default Transaction;
