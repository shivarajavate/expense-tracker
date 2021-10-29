import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import NewExpense from './NewExpense';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const INIT_EXPENSES = [
	{ id: Math.random().toString(), date: new Date(2016, 2, 12), title: 'Bike Insurance', amount: 20000},
	{ id: Math.random().toString(), date: new Date(2018, 4, 24), title: 'Car Insurance', amount: 50000},
	{ id: Math.random().toString(), date: new Date(2020, 6, 30), title: 'Life Insurance', amount: 120000},
]
const Expenses = () => {
	const [expenses, setExpenses] = useState(INIT_EXPENSES);
	const [selectedFilterYear, setSelectedFilterYear] = useState('2020');
	const [filteredExpenses, setFilteredExpenses] = useState(INIT_EXPENSES.filter(expense => expense.date.getFullYear() === Number(selectedFilterYear)));

	console.log('Expenses reacted!!');

	const onSaveNewExpenseHandler = (newExpense) => {
		addExpense(newExpense);
		setExpenses(expenses);
		onChangeFilterYearHandler(selectedFilterYear);
	};

	const onChangeFilterYearHandler = (selFilterYear) => {
		setSelectedFilterYear(selFilterYear);
		console.log(selFilterYear);
		const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number(selFilterYear));
		setFilteredExpenses(filteredExpenses);
		console.log(filteredExpenses);
	};

	const addExpense = (expense) => {
		const newExpense = { id: Math.random().toString(), ...expense };
		expenses.unshift(newExpense);
		console.log(newExpense);
	};

	return (<>
		<NewExpense onSaveNewExpense={onSaveNewExpenseHandler} />

		<Card className="expenses">
			<ExpensesFilter selectedYear={selectedFilterYear} onChangeFilterYear={onChangeFilterYearHandler} />
			{filteredExpenses.map(expense => <ExpenseItem key={expense.id} id={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
		</Card>
	</>
	);
};

export default Expenses;
