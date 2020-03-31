import React from "react";

const TransactionForm = () => (
  <form>
    <p>
      <strong>Add new transaction</strong>
    </p>
    <div class="mb-3">
      <label for="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        placeholder="Please enter description"
      />
    </div>

    <div class="mb-3">
      <label for="amount">Amount</label>
      <input
        type="text"
        class="form-control"
        id="amount"
        placeholder="Please enter amount"
      />
    </div>

    <button type="submit" class="btn btn-primary">
      Add transaction
    </button>
  </form>
);

export default TransactionForm;
