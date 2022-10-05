const FormatChartData = (data) => {
	let formattedData = {
		'median': [],
		'top': [],
		'below': [],
		'totalDeposit': [],
		'benchmark': [],
		'yearMonth': []
	}

	data.map(({ expectedAmounts: { benchmark, 10: below, 50: median, 75: top }, totalDeposit, yearMonth }) => {
		formattedData['benchmark'].push(benchmark)
		formattedData['totalDeposit'].push(totalDeposit)
		formattedData['top'].push(top)
		formattedData['median'].push(median)
		formattedData['below'].push(below)
		formattedData['yearMonth'].push(yearMonth)
	})

	return formattedData
}

export default FormatChartData