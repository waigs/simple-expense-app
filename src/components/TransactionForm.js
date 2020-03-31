import React, { useState, useContext } from "react";
import { GlobalContext } from "../state/GlobalState";

const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransAction = {
      id: Date(),
      description,
      amount: +amount
    };

    addTransaction(newTransAction);
    setDescription("");
    setAmount("");
  };

  const onChangeDescription = e => {
    setDescription(e.target.value);
  };
  const onChangeAmount = e => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>
        <strong>Add new transaction</strong>
      </p>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter description"
          value={description}
          onChange={onChangeDescription}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter amount"
          value={amount}
          onChange={onChangeAmount}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add transaction
      </button>
    </form>
  );
};

export default TransactionForm;
