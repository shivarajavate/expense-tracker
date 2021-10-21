import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

class Expenses extends React.Component {

	constructor() {
		super();
		this.expenseItems = [];

		this.addExpenseItem(new Date(2016, 2, 12), 'Bike Insurance', 20000);
		this.addExpenseItem(new Date(2018, 4, 24), 'Car Insurance', 50000);
		this.addExpenseItem(new Date(2020, 6, 30), 'Life Insurance', 120000);
	}

	addExpenseItem(date = new Date(), title = 'Sample Expense', amount = 10000) {
		const expenseItem = new ExpenseItem(date, title, amount);
		this.expenseItems.push(expenseItem.render());
	}

	eventHandler() {
		alert('You just clicked!!');
	}

	render() {
		return (
			<Card className="expenses">
				<button onClick={this.eventHandler}>click me</button>
				<div> { this.expenseItems } </div>
			</Card>
		);
	}
}

export default Expenses;
