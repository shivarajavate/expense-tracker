import React from "react";
import './Chart.css';
import ChartBar from './ChartBar.js';

const Chart = (props) => {
	return <div className='chart'>
		{
			props.dataPoints
				.map(dataPoint =>
					<ChartBar
						key={dataPoint.key}
						value={dataPoint.value}
						label={dataPoint.label}
						max={Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))} />
				)
		}
	</div>
};

export default Chart;
