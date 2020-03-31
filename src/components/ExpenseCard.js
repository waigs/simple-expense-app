import React from "react";

const ExpenseCard = () => (
  <div class="row">
    <div class="col-sm-6">
      <div class="card alert alert-success">
        <div class="card-body">
          <h5 class="card-title">Income</h5>
          <h4>
            <strong>£11</strong>
          </h4>
        </div>
      </div>
    </div>
    <div class="col-sm-6 ">
      <div class="card alert alert-danger">
        <div class="card-body">
          <h5 class="card-title">Expense</h5>
          <h4>
            <strong>£11</strong>
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default ExpenseCard;
