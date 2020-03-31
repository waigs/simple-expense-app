import React from "react";

const Transactions = () => (
  <>
    <p>
      <strong>History</strong>
    </p>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between bg-light">
        <div class="text-success">
          <h6 class="my-0">Promo code</h6>
        </div>
        <span class="text-success">-$5</span>
      </li>

      <li class="list-group-item d-flex justify-content-between">
        <div class="text-danger">
          <h6 class="my-0">Promo code</h6>
        </div>
        <span class="text-danger">-$5</span>
      </li>
    </ul>
  </>
);

export default Transactions;
