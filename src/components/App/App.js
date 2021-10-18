import './App.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function App() {
	const expenseDate = new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 50000;
	return (
		<div>
	  		<ExpenseItem title={expenseTitle} date={expenseDate} amount={expenseAmount} />
		</div>
	);
}

export default App;
