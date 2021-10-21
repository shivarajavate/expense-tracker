import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

class ExpenseItem extends React.Component {
	constructor(date, title, amount) {
		super();
		this.date = date;
		this.title = title;
		this.amount = amount;
	}

	render() {
		return (
			<Card className= "expense-item">
				<ExpenseDate date={this.date} />
				<div className = "expense-item__description">
					<h2>{this.title}</h2>
					<div className = "expense-item__price">{this.amount}</div>
				</div>
			</Card>
		);
	}
}

export default ExpenseItem;
