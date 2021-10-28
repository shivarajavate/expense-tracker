import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

const Expenses = () => {
	const [newDate, setNewDate] = useState('');
	const [newTitle, setNewTitle] = useState('');
	const [newAmount, setNewAmount] = useState('');
	const [expenses, setExpenses] = useState([]);
	console.log('Expenses reacted!!');

	const onChangeDateHandler = (event) => {
		setNewDate(event.target.value);
		console.log(event.target.value);
	};

	const onChangeTitleHandler = (event) => {
		setNewTitle(event.target.value);
		console.log(event.target.value);
	};

	const onChangeAmountHandler = (event) => {
		setNewAmount(event.target.value);
		console.log(event.target.value);
	};

	const onSubmitNewExpenseFormHandler = (event) => {
		event.preventDefault();
		const newExpense = { date: new Date(newDate), title: newTitle, amount: newAmount };
		console.log(newExpense);
		expenses.unshift(newExpense);
		setNewDate('');
		setNewTitle('');
		setNewAmount('');
	}

	// addExpenseItem(new Date(2016, 2, 12), 'Bike Insurance', 20000);
	// addExpenseItem(new Date(2018, 4, 24), 'Car Insurance', 50000);
	// addExpenseItem(new Date(2020, 6, 30), 'Life Insurance', 120000);

	return (<>
		<div className='new-expense'>
			<form onSubmit={onSubmitNewExpenseFormHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							min='2020-01-01'
							max='2020-12-31'
							value={newDate}
							onChange={onChangeDateHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							value={newTitle}
							onChange={onChangeTitleHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							value={newAmount}
							onChange={onChangeAmountHandler} />
					</div>
					<div>
						<button type='submit'>Add Expense</button>
					</div>
				</div>
			</form>
		</div>
		<Card className="expenses">
			{expenses[0] ? <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} /> : null}
			{expenses[1] ? <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} /> : null}
			{expenses[2] ? <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} /> : null}
			{expenses[3] ? <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} /> : null}
			{expenses[4] ? <ExpenseItem date={expenses[4].date} title={expenses[4].title} amount={expenses[4].amount} /> : null}
		</Card>
	</>
	);
};

export default Expenses;
