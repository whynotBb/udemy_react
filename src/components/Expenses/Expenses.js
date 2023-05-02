import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
    // props.onFilterExpense(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
        {filterExpense.map((item, index, array) => {
          return (
            <ExpenseItem
              key={item.id}
              id={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;
