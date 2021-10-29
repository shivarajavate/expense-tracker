import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpense from './NewExpense';
import ExpensesFilter from './ExpensesFilter';
import FilteredExpenses from './FilteredExpenses';
import ExpensesChart from './ExpensesChart';

const INIT_EXPENSES = [
	{ id: Math.random().toString(), date: new Date(2016, 2, 12), title: 'Bike Insurance', amount: 20000 },
	{ id: Math.random().toString(), date: new Date(2018, 4, 24), title: 'Car Insurance', amount: 50000 },
	{ id: Math.random().toString(), date: new Date(2020, 6, 30), title: 'Life Insurance', amount: 120000 },
];

const Expenses = () => {
	const [expenses, setExpenses] = useState(INIT_EXPENSES);
	const [isNewExpenseOpen, setIsNewExpenseOpen] = useState(false);
	const [selectedFilterYear, setSelectedFilterYear] = useState('2020');
	const [filteredExpenses, setFilteredExpenses] = useState(INIT_EXPENSES.filter(expense => expense.date.getFullYear() === Number(selectedFilterYear)));

	console.log('Expenses reacted!!');

	const onNewExpenseClickHandler = () => {
		setIsNewExpenseOpen(true);
	};

	const onCancelNewExpenseHandler = () => {
		setIsNewExpenseOpen(false);
	};

	const onSaveNewExpenseHandler = (newExpense) => {
		addExpense(newExpense);
		setExpenses(expenses);
		onChangeFilterYearHandler(selectedFilterYear);
		setIsNewExpenseOpen(false);
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
		<section className='new-expense'>
			{
				isNewExpenseOpen ?
					<NewExpense onCancelNewExpense={onCancelNewExpenseHandler} onSaveNewExpense={onSaveNewExpenseHandler} /> :
					<button onClick={onNewExpenseClickHandler}>Add New Expense</button>
			}
		</section>

		<Card className='expenses'>
			<ExpensesFilter selectedYear={selectedFilterYear} onChangeFilterYear={onChangeFilterYearHandler} />
			<ExpensesChart items={filteredExpenses} />
			<FilteredExpenses items={filteredExpenses} />
		</Card>
	</>
	);
};

export default Expenses;
