import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props) {
  return (
    <div className='expenses'>
      <ExpenseItem id={props.items[0].id} date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
    </div>
  );
}
export default Expenses;
