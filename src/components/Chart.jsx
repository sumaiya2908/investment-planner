import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'

import Loader from './Loader'
import getChartData from '../utils/GetChartData';

ChartJS.register(...registerables);

const Chart = ({ data, loading }) => {

	// Display empty chart
	let chartData = {
		datasets: []
	}
	let chartOptions = {}

	if (data) {
		({ chartData, chartOptions } = getChartData(data))
	}

	return (
		<div className='container'>
			<Line data={chartData} options={chartOptions} />
			{loading && <Loader />}
		</div>
	)
}

export default Chart