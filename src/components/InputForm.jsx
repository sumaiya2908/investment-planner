import React, { useEffect, useState } from "react";
import axios from "axios";

const InputForm = () => {
	const [fields, setFields] = useState({});
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

		</>
	);
};

export default InputForm;
