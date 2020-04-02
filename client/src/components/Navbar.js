import React from "react";

const Navbar = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
    <h5 className="my-0 mr-md-auto font-weight-normal">Simple Expense App</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://github.com/waigs/simple-expense-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </nav>
  </div>
);

export default Navbar;
