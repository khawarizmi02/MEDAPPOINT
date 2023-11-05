"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {

	const [drugs, setDrugs] = useState('');
	const [indication, setIndication] = useState('');
	const [notes, setNotes] = useState('');
	const [duration, setDuration] = useState('');
	const [diagnosis, setDiagnosis] = useState('');
	const [chiefComplain, setChiefComplain] = useState('');
	const [HPI, setHPI] = useState('');
	const [PMHx, setPMHx] = useState('');
	const [PMHxList, setPMHxList] = useState([]);
	const [medicationHistory, setMedicationHistory] = useState([]);
	const [formData, setFormData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormData({
			...formData,
			patient: '653d234aabb64d01e14c5424',
			chief: '65406ce568cc89992fdb4dc5',
			healthCenter: '653f4d5784c78f3d47af0853',
			regNum: 12345,
			diagnosis: diagnosis,
			chiefComplain: chiefComplain,
			HPI: HPI,
			PMHx: PMHxList,
			medicationHistory: medicationHistory
		});
		console.log(formData);

		submitForm(formData);
	};

	useEffect(() => {
		const submitData = async () => {
			if (Object.keys(formData).length !== 0) {
				await submitForm(formData);
				console.log(formData);
			}
		};

		submitData();

	}, [formData]);

	const submitForm = async (formData) => {
		try {
			const response = await axios.post('http://localhost:5000/healthRecord', formData);
			console.log(response.data);
		} catch (error) {
			console.error('Error submitting form', error);
		}
	};


	return (
		<div className='flex flex-col items-center justify-center bg-grey-100 min-h-screen bg-blue-400'>
			<div className='w-full max-w-md rounded bg-white p-6 m-4'>

				<input
					type="text"
					name="diagnosis"
					value={diagnosis}
					onChange={(e) => setDiagnosis(e.target.value)}
					placeholder='Diagnosis'
					className='border-b-2 border-black mb-4 w-full'
				/>

				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					Chief Complain:</label>
				<textarea
					type="text"
					name="chiefComplain"
					value={chiefComplain}
					onChange={(e) => setChiefComplain(e.target.value)}
					className='h-[90px] border border-gray-400 w-full'
				></textarea>

				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					HPI:</label>
				<textarea
					type="text"
					name="HPI"
					value={HPI}
					onChange={(e) => setHPI(e.target.value)}
					className='h-[90px] border border-gray-400 w-full'
				></textarea>

				<div className='flex items-center justify-between w-full'>
					<label className='pr-2 text-gray-700 text-sm font-bold mb-2 flex flex-col'>
						PMHx:</label>
					<input
						type="text"
						name="PMHx"
						value={PMHx}
						onChange={(e) => setPMHx(e.target.value)}
						className='border border-gray-400 mb-2 pl-1'
					></input>
					<button
						onClick={() => {
							setPMHxList([
								...PMHxList,
								PMHx
							]);
						}}
						className='bg-blue-500 p-2 m-2 rounded text-white'
					>
						+
					</button>
				</div>

				<ul className='flex flex-col items-center'>
					{PMHxList.map((item, index) => (
						<li key={index} className='grid grid-cols-3 pb-2 mb-2 px-2 items-center w-full'>
							<div className='text-center pl-2 '>{index + 1}</div>
							<div className='text-center px-2 '>{item}</div>
							<button
								onClick={() => {
									const updatedPMHxList = [...PMHxList];
									updatedPMHxList.splice(index, 1);
									setPMHxList(updatedPMHxList);
								}}
								className='p-2 m-2 rounded bg-red-500'
							>
								X
							</button>
						</li>
					))}
				</ul>

			</div>


			<div className='w-full max-w-md rounded bg-white flex flex-col items-center justify-center pb-4 mb-3'>
				<h1 className='text-gray-700 bg-white text-sm font-bold mb-2 flex flex-col mt-3'>Medication History:</h1>
				<div className='grid grid-cols-2 bg-white px-3'>
					<input
						type="text"
						name="drugs"
						value={drugs}
						onChange={(e) => setDrugs(e.target.value)}
						placeholder='Drugs'
						className='border-2 px-1 border-black mb-4 w-full h-8'
					/>
					<input
						type="text"
						name="indication"
						value={indication}
						onChange={(e) => setIndication(e.target.value)}
						placeholder='Indication'
						className='border-2 px-1 border-black mb-4 w-full'
					/>
					<input
						type="text"
						name="notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						placeholder='Notes'
						className='border-2 px-1 border-black mb-4 w-full'
					/>
					<input
						type="number"
						name="duration"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						placeholder='Duration (days)'
						className='border-2 px-1 border-black mb-4 w-full'
					/>
				</div>

				<button
					className='bg-blue-500 p-2 m-2 rounded text-white'
					onClick={() => {
						setMedicationHistory([
							...medicationHistory,
							{
								drugs: drugs,
								indication: indication,
								notes: notes,
								durations: duration
							}
						]);
						setDrugs('');
						setIndication('');
						setNotes('');
						setDuration('');
					}}
				>
					Add Medication
				</button>

				<ul className='flex flex-col items-center'>
					<li className='grid grid-cols-6 px-2 items-center'>
						<div className='text-center pl-2'>#</div>
						<div className='text-center px-2'>Drugs</div>
						<div className='text-center px-2'>Indication</div>
						<div className='text-center px-2'>Notes</div>
						<div className='text-center px-2'>Duration</div>
						<div className='text-center px-2'></div>
					</li>
					{medicationHistory.map((medication, index) => (
						<li key={index} className='grid grid-cols-6 pb-2 mb-2 px-2 items-center'>
							<div className='text-center pl-2 '>{index + 1}</div>
							<div className='text-center px-2 '>{medication.drugs}</div>
							<div className='text-center px-2 '>{medication.indication}</div>
							<div className='text-center px-2'>{medication.notes}</div>
							<div className='text-center px-2 '>{medication.durations}</div>
							<button
								className='p-2 m-2 rounded bg-red-500'
								onClick={() => {
									const updatedMedicationHistory = [...medicationHistory];
									updatedMedicationHistory.splice(index, 1);
									setMedicationHistory(updatedMedicationHistory);
								}}
							>X</button>
						</li>
					))}
				</ul>

			</div>
			<div className='flex items-center justify-between pb-6 mb-3'>
				<button
					type="submit"
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
										 py-2 px-4 rounded focus:shadow-outline'
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Form;