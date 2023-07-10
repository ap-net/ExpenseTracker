import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
            <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
            <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />


    </div>
  );
}

export default App;
