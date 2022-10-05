import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(...registerables);

const Chart = ({ data, loading }) => {


	return (
		<div className='container'>
			<Line data={chartData} options={chartOptions} />
		</div>
	)
}

export default Chart