import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 34.45,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "TV",
    amount: 434.45,
    date: new Date(2023, 7, 9),
  },
{
  id: "e3",
  title: "Car",
  amount: 1535.45,
  date: new Date(2023, 7, 3),
},
{
  id: "e4",
  title: "Door",
  amount: 335.45,
  date: new Date(2023, 7, 15),
},
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
