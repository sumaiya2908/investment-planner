import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from "./Chart";
import { debounce } from "lodash";

const InputForm = () => {
	const [fields, setFields] = useState({});
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		//if any of the fields are empty, set data to null
		if (!(fields.initialInvestment) || !(fields.monthlyInvestment)) {
			setData(null)
			setLoading(false)
			return
		}

		const param = {
			initialInvestment: fields.initialInvestment,
			monthlyInvestment: fields.monthlyInvestment,
		};
	}, [fields]);

	//when the input is change, loader is displayed
	const handleChange = (e) => {
		setData(null)
		setLoading(true)
		debounceData(e)
	}

	//wait for 600ms to set the fields, and then request the data from api
	const debounceData = debounce((e) => {
		const { name, value } = e.target;
		setFields((prev) => ({
			...prev,
			[name]: value || 0,
		}));
	}, 600);

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
