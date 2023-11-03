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

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/healthrecord', formData);
			console.log(response.data);
		} catch (error) {
			console.error('Error submitting form', error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center bg-grey-100 min-h-screen '>
			<form onSubmit={handleSubmit} className='w-full max-w-md rounded bg-white p-6 m-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Patient:
					<input
						type="text"
						name="patient"
						value={formData.patient}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3' />
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Health Center:
					<input
						type="text"
						name="healthCenter"
						value={formData.healthCenter}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3'
					/>
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Chief:
					<input
						type="text"
						name="chief"
						value={formData.chief}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3'
					/>
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Date Submit:
					<input type="text" name="dateSubmit" value={formData.dateSubmit}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3'
					/>
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Reg Num:
					<input type="text" name="regNum" value={formData.regNum}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3'
					/>
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Diagnosis:
					<input type="text" name="diagnosis" value={formData.diagnosis}
						onChange={handleChange}

					/>
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Chief Complain:
					<input type="text" name="chiefComplain" value={formData.chiefComplain} onChange={handleChange} />
				</label>
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					HPI:
					<input type="text" name="HPI" value={formData.HPI} onChange={handleChange} />
				</label>
				{/* Add more form fields here */}
				<div className='flex items-center justify-between'>
					<button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;