import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const selectedYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
    // props.onFilterExpense(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
        {/* 변수 처리 하기
        {filterExpense.length === 0 && <p>No expenses found</p>}
        {filterExpense.length > 0 &&
          filterExpense.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                id={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
              />
            );
          })} */}
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList items={filterExpense} />
      </Card>
    </li>
  );
};
export default Expenses;
