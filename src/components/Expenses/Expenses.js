import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import NewExpense from './NewExpense';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = () => {
	const [expenses, setExpenses] = useState([]);
	const [selectedFilterYear, setSelectedFilterYear] = useState('2020');

	console.log('Expenses reacted!!');

	const onSaveNewExpenseHandler = (newExpense) => {
		addExpense(newExpense);
		setExpenses(expenses);
	};

	const onChangeFilterYearHandler = (selFilterYear) => {
		setSelectedFilterYear(selFilterYear);
		console.log(selFilterYear);
		const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === selFilterYear);
		setExpenses(filteredExpenses);
		console.log(filteredExpenses);
	};

	const addExpense = (expense) => {
		const newExpense = { id: Math.random().toString(), ...expense };
		expenses.unshift(newExpense);
		console.log(newExpense);
	};

	addExpense({ date: new Date(2016, 2, 12), title: 'Bike Insurance', amount: 20000});
	addExpense({ date: new Date(2018, 4, 24), title: 'Car Insurance', amount: 50000});
	addExpense({ date: new Date(2020, 6, 30), title: 'Life Insurance', amount: 120000});

	return (<>
		<NewExpense onSaveNewExpense={onSaveNewExpenseHandler} />

		<Card className="expenses">
			<ExpensesFilter selectedYear={selectedFilterYear} onChangeFilterYear={onChangeFilterYearHandler} />
			{expenses.map(expense => <ExpenseItem key={expense.id} id={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
		</Card>
	</>
	);
};

export default Expenses;
