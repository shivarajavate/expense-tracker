import React from "react";
import './ExpensesChart.css';
import Chart from '../UI/Chart.js';

const ExpensesChart = (props) => {

	const dataPoints = [
		{key: 'Jan', label: 'Jan', value: props.items.filter(item => item.date.getMonth() === 0).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Feb', label: 'Feb', value: props.items.filter(item => item.date.getMonth() === 1).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Mar', label: 'Mar', value: props.items.filter(item => item.date.getMonth() === 2).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Apr', label: 'Apr', value: props.items.filter(item => item.date.getMonth() === 3).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'May', label: 'May', value: props.items.filter(item => item.date.getMonth() === 4).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Jun', label: 'Jun', value: props.items.filter(item => item.date.getMonth() === 5).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Jul', label: 'Jul', value: props.items.filter(item => item.date.getMonth() === 6).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Aug', label: 'Aug', value: props.items.filter(item => item.date.getMonth() === 7).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Sep', label: 'Sep', value: props.items.filter(item => item.date.getMonth() === 8).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Oct', label: 'Oct', value: props.items.filter(item => item.date.getMonth() === 9).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Nov', label: 'Nov', value: props.items.filter(item => item.date.getMonth() === 10).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
		{key: 'Dec', label: 'Dec', value: props.items.filter(item => item.date.getMonth() === 11).map(monthlyItem => monthlyItem.amount).reduce((a, b) => a + b, 0)},
	];
	console.log(dataPoints);
	return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
