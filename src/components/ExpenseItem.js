import React from 'react';
import './ExpenseItem.css';

class ExpenseItem extends React.Component {
	constructor(date, title, amount) {
		super();
		this.date = date;
		this.title = title;
		this.amount = amount;
	}

	render() {
		return	<div className= "expense-item">
					<div>{this.date}</div>
					<div className = "expense-item__description">
						<h2>{this.title}</h2>
						<div className = "expense-item__price">{this.amount}</div>
					</div>
				</div>;
	}
}

export default ExpenseItem;
