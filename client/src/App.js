import React from "react";
import Navbar from "./components/Navbar";
import TransactionBalance from "./components/TransactionBalance";
import ExpenseCard from "./components/ExpenseCard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

import { GlobalProvider } from "./state/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Navbar />
        <TransactionBalance />
        <ExpenseCard />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
};

export default App;
