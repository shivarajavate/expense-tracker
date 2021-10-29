import React, { useState } from 'react';
import "./NewExpense.css";

const NewExpense = (props) => {
	const [newDate, setNewDate] = useState('');
	const [newTitle, setNewTitle] = useState('');
	const [newAmount, setNewAmount] = useState('');
	console.log('NewExpense reacted!!');

	const onChangeDateHandler = (event) => {
		setNewDate(event.target.value);
		console.log(event.target.value);
	};

	const onChangeTitleHandler = (event) => {
		setNewTitle(event.target.value);
		console.log(event.target.value);
	};

	const onChangeAmountHandler = (event) => {
		setNewAmount(event.target.value);
		console.log(event.target.value);
	};

	const onCancelClickHandler = () => {
		props.onCancelNewExpense();
		setNewDate('');
		setNewTitle('');
		setNewAmount('');
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const newExpense = { date: new Date(newDate), title: newTitle, amount: newAmount };
		props.onSaveNewExpense(newExpense);
		setNewDate('');
		setNewTitle('');
		setNewAmount('');
	};

	return (<>
		<div className='new-expense'>
			<form onSubmit={onSubmitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							min='2016-01-01'
							max='2022-12-31'
							value={newDate}
							onChange={onChangeDateHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							value={newTitle}
							onChange={onChangeTitleHandler} />
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							value={newAmount}
							onChange={onChangeAmountHandler} />
					</div>
					<div className='new-expense__control'>
					</div>
					<div className='new-expense__control'>
					</div>
					<div className='new-expense__control'>
						<button onClick={onCancelClickHandler}>Cancel</button>
						<button type='submit'>Save</button>
					</div>
				</div>
			</form>
		</div>
	</>
	);
};

export default NewExpense;
