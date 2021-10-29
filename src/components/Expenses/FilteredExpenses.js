import React from "react";
import './FilteredExpenses.css';
import ExpenseItem from './ExpenseItem';

const FilteredExpenses = (props) => {
	return <div className='filtered-expenses'>
		{props.items?.length > 0 ?
			props.items.map(item => <ExpenseItem key={item.id} id={item.id} date={item.date} title={item.title} amount={item.amount} />)
			: <h1>Found no expenses</h1>}
	</div>;
};

export default FilteredExpenses;
