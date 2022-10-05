import FormatChartData from "./FormatChartData";

const getChartData = (data) => {
	let formattedData = FormatChartData(data);

	const chartData = {
		labels: formattedData["yearMonth"],
		datasets: [
			{
				data: formattedData["median"],
				label: "Median",
				pointRadius: 0,
				borderColor: "#7CB9E8",
			},
			{
				data: formattedData["top"],
				label: "Top 25%",
				pointRadius: 0,
				borderColor: "#B9D9EB",
			},
			{
				data: formattedData["below"],
				label: "Bottom 10%",
				pointRadius: 0,
				fill: 1,
				borderColor: "#B9D9EB",
				backgroundColor: "#B9D9EB",
			},
			{
				data: formattedData["totalDeposit"],
				label: "Total Deposit",
				pointRadius: 0,
				borderColor: "#36454F",
				order: 1
			},
			{
				data: formattedData["benchmark"],
				label: "2.5% p.a",
				pointRadius: 0,
				borderColor: "#FCF55F",
			},
		],
	};

	const chartOptions = {
		scales: {
			xAxis: {
				ticks: {
					maxTicksLimit: 12,
				},
				offset: true,
			},
			yAxis: {
				ticks: {
					format: {
						style: 'currency',
						currency: 'en-SGD'
					},
					precision: 2
				}
			}
		},
		layout: {
			padding: {
				right: 8
			}
		},
		interaction: {
			mode: 'index',
		},

		plugins: {
			tooltip: {
				padding: 12,
				boxPadding: 8,
			},
			legend: {
				display: false
			}
		},
		responsive: true
	};

	return { chartData, chartOptions };
};

export default getChartData;
