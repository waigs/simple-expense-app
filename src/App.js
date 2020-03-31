import React from "react";
import Navbar from "./components/Navbar";
import TransactionBalance from "./components/TransactionBalance";
import ExpenseCard from "./components/ExpenseCard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

import { GlobalProvider } from "./state/GlobalState";

const App = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Navbar />
        <TransactionBalance />
        <ExpenseCard />
        <TransactionList />
        <TransactionForm />
      </GlobalProvider>
    </div>
  );
};

export default App;
