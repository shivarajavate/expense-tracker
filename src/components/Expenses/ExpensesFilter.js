import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

	const onChangeFilterYearHandler = (event) => {
		console.log(event.target.value);
		props.onChangeFilterYear(event.target.value);
	};

	return <div className='expenses-filter'>
		<div className='expenses-filter__control'>
			<label>Filter By Year</label>
			<select value={props.selectedYear} onChange={onChangeFilterYearHandler}>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
				<option value='2020'>2020</option>
				<option value='2019'>2019</option>
				<option value='2018'>2018</option>
				<option value='2017'>2017</option>
				<option value='2016'>2016</option>
			</select>
		</div>
	</div>
};

export default ExpensesFilter;
