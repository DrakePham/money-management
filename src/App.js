import React, { useState } from 'react';

import './App.css';

import Expense from "./component/Expense/Expense";
import NewExpense from "./component/NewExpense/NewExpense";

const preData = [
  { id: 'e1', title: 'Car Insurance', amount: 264.67, date: new Date(2020, 2, 25) },
  { id: 'e2', title: 'New TV', amount: 541.12, date: new Date(2021, 5, 14) },
  { id: 'e3', title: 'Laptop', amount: 2422, date: new Date(2019, 9, 18) },
  { id: 'e4', title: 'House', amount: 345328, date: new Date(2021, 11, 5) },
];

const App = () => {
  const [expenses, setExpense] = useState(preData);
  const addExpenseHandler = expense => {
    console.log(expense);
    console.log(expenses);
    setExpense((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
