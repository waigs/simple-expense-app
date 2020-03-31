import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ExpenseCard from "./components/ExpenseCard";
import Transactions from "./components/Transactions";
import TransactionForm from "./components/TransactionForm";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <ExpenseCard />
      <Transactions />
      <TransactionForm />
    </div>
  );
};

export default App;
