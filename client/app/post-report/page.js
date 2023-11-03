"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
	const [formData, setFormData] = useState({
		patient: '',
		healthCenter: '',
		chief: '',
		dateSubmit: '',
		regNum: '',
		diagnosis: '',
		chiefComplain: '',
		HPI: '',
		PMHx: [''],
		medicationHistory: [
			{
				drugs: '',
				indication: '',
				notes: '',
				durations: ''
			}
		]
	});

	// const handleChange = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/healthrecord', formData);
			console.log(response.data);
		} catch (error) {
			console.error('Error submitting form', error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		let values;
	  
		if (name === 'diagnosis') {
		  values = value.split(','); // split the input on commas for diagnosis field
		} else {
		  values = value; // for other fields, store the entire input value
		}
	  
		setFormData({ ...formData, [name]: values });
	  };

	return (
		<div className='flex flex-col items-center justify-center bg-grey-100 min-h-screen bg-blue-400'>
			<form onSubmit={handleSubmit} className='w-full max-w-md rounded bg-white p-6 m-4'>

					<input type="text" name="diagnosis" value={formData.diagnosis}
						onChange={handleChange} placeholder='Diagnosis' className='border-b-2 border-black mb-4 w-full'

					/>
				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					Chief Complain:</label>
					<textarea type="text" name="chiefComplain" value={formData.chiefComplain} onChange={handleChange} className='h-[90px] border border-gray-400 w-full' ></textarea>
				
				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					HPI:</label>
					<textarea type="text" name="HPI" value={formData.HPI} onChange={handleChange} className='h-[90px] border border-gray-400 w-full' ></textarea>
				
				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					PMHx:</label>
					<textarea type="text" name="PMHx" value={formData.PMHx} onChange={handleChange} className='h-[90px] border border-gray-400 w-full' ></textarea>
				
		


				<h1 className='text-gray-700 text-sm font-bold mb-2 flex flex-col mt-8'>Medication History:</h1>
				<textarea type="text" name="drugs" value={formData.drugs}
					onChange={handleChange} placeholder='Drugs (separate with comma)' className='border-b-2 border-black mb-4 w-full h-8'
				></textarea>
				<input type="text" name="indication" value={formData.indication}
					onChange={handleChange} placeholder='Indication' className='border-b-2 border-black mb-4 w-full'
				/>
				<input type="text" name="notes" value={formData.notes}
					onChange={handleChange} placeholder='Notes' className='border-b-2 border-black mb-4 w-full'
				/>
				<input type="text" name="duration" value={formData.duration}
					onChange={handleChange} placeholder='Duration' className='border-b-2 border-black mb-4 w-full'
				/>
				{/* Add more form fields here */}
				<div className='flex items-center justify-between'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
														 py-2 px-4 rounded focus:shadow-outline'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;