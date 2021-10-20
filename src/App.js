import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

class App extends React.Component {

	constructor() {
		super();
		this.expenseItems = [];

		const expenseItem1 = new ExpenseItem({
			date: (new Date()).toISOString(),
			title: 'Car Insurance',
			amount: 50000
		});

		const expenseItem2 = new ExpenseItem({
			date: (new Date()).toISOString(),
			title: 'Bike Insurance',
			amount: 20000
		});

		const expenseItem3 = new ExpenseItem({
			date: (new Date()).toISOString(),
			title: 'Life Insurance',
			amount: 1200000
		});

		this.expenseItems.push(expenseItem1.render());
		this.expenseItems.push(expenseItem2.render());
		this.expenseItems.push(expenseItem3.render());
	}

	render() {
		return	<div> { this.expenseItems } </div>;
	}
}

export default App;
