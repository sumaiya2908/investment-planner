import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from "./Chart";
import { debounce } from "lodash";
const InputForm = () => {
	const [fields, setFields] = useState({});
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false)
	return (
		<>
			<form className='form container'>
				<div className='flex-column input-group'>
					<label className='mb-2'>Initial Investment</label>
					<input
						className='input-field'
						type='number'
						name='initialInvestment'
						onChange={handleChange}
					/>
				</div>

				<div className='flex-column input-group'>
					<label className='mb-2'>Monthly Investment</label>
					<input
						className='input-field'
						type='number'
						name='monthlyInvestment'
						onChange={handleChange}
					/>
				</div>
			</form>

			{!(data) && <div className='starter-text'> Enter the values to calculate your investment</div>}

			<Chart data={data} loading={loading} />
		</>
	);
};

export default InputForm;
