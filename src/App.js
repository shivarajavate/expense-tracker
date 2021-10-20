import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

class App extends React.Component {

	constructor() {
		super();
		this.expenseItems = [];

		this.addExpenseItem((new Date()).toISOString(), 'Bike Insurance', 20000);
		this.addExpenseItem((new Date()).toISOString(), 'Car Insurance', 50000);
		this.addExpenseItem((new Date()).toISOString(), 'Life Insurance', 120000);
	}

	addExpenseItem(date, title, amount) {
		const expenseItem = new ExpenseItem(date, title, amount);
		this.expenseItems.push(expenseItem.render());
	}

	render() {
		return	<div>
					<h1>Track Expenses</h1>
					<div> { this.expenseItems } </div>;
				</div>;
	}
}

export default App;
