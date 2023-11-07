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
		<div className='flex flex-col items-center justify-center bg-grey-100 min-h-screen bg-[#8DDBD1]'>
			<div className='w-full max-w-md bg-white p-6 m-4 mt-20 rounded-3xl'>

				<input
					type="text"
					name="diagnosis"
					value={diagnosis}
					onChange={(e) => setDiagnosis(e.target.value)}
					placeholder='Diagnosis'
					className='border-b-2 border-black mb-4 w-full mt-2'
				/>

				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					Chief Complain:</label>
				<textarea
					type="text"
					name="chiefComplain"
					value={chiefComplain}
					onChange={(e) => setChiefComplain(e.target.value)}
					className='h-[90px] border border-gray-400 w-full '
				></textarea>

				<label className=' text-gray-700 text-sm font-bold mb-2 flex flex-col'>
					HPI:</label>
				<textarea
					type="text"
					name="HPI"
					value={HPI}
					onChange={(e) => setHPI(e.target.value)}
					className='h-[90px] border border-gray-400 w-full mb-2'
				></textarea>

				<div className='flex items-center justify-between w-full mt-4 mb-2'>
					<label className='pr-2 text-gray-700 text-sm font-bold flex flex-col'>
						PMHx:</label>
					<input
						type="text"
						name="PMHx"
						value={PMHx}
						onChange={(e) => setPMHx(e.target.value)}
						className='border border-gray-400 pl-1 w-full mr-2'
					></input>
					<button
						onClick={() => {
							setPMHxList([
								...PMHxList,
								PMHx
							]);
						}}
						className='bg-[#159686] px-6 rounded text-white'
					>
						+
					</button>
				</div>

				<ul className='flex flex-col items-center'>
					{PMHxList.map((item, index) => (
						<li key={index} className='grid grid-cols-5 m-1 items-center w-full'>
							<div className='text-center pl-2 '>{index + 1}</div>
							<div className='px-2 col-span-3 text-left '>{item}</div>
							<button
								onClick={() => {
									const updatedPMHxList = [...PMHxList];
									updatedPMHxList.splice(index, 1);
									setPMHxList(updatedPMHxList);
								}}
								className='ml-5 rounded bg-red-500 items-end text-white'
							>
								-
							</button>
						</li>
					))}
				</ul>

			</div>


			<div className='w-full max-w-md rounded-3xl bg-white flex flex-col items-center justify-center pb-4 mb-3'>
				<h1 className='text-gray-700 bg-white text-sm font-bold mb-2 flex flex-col mt-3'>Medication History:</h1>
				<div className='grid grid-cols-2 gap-2 bg-white px-3'>
					<input
						type="text"
						name="drugs"
						value={drugs}
						onChange={(e) => setDrugs(e.target.value)}
						placeholder='Drugs'
						className='border-2 px-1 border-black w-full h-8'
					/>
					<input
						type="text"
						name="indication"
						value={indication}
						onChange={(e) => setIndication(e.target.value)}
						placeholder='Indication'
						className='border-2 px-1 border-black w-full'
					/>
					<input
						type="text"
						name="notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						placeholder='Notes'
						className='border-2 px-1 border-black w-full'
					/>
					<input
						type="number"
						name="duration"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						placeholder='Duration (days)'
						className='border-2 px-1 border-black w-full'
					/>
				</div>

				<button
					className='bg-[#159686] p-2 m-2 rounded text-white mb-6'
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

				<table className='table-auto w-11/12 border-2 mb-2'>
					<thead>
						<tr >
							<th className='px-1 py-2 text-left'>#</th>
							<th className='px-1 py-2 text-left'>Drugs</th>
							<th className='px-1 py-2 text-left'>Indication</th>
							<th className='px-1 py-2 text-left'>Notes</th>
							<th className='px-1 py-2 text-left'>Duration</th>
							<th className='px-1 py-2 text-left'></th>
						</tr>
					</thead>
					<tbody>
					{medicationHistory.map((medication, index) => (
						<tr key={index} className='bg-gray-100'>
							<td className='border px-1 py-2 '>{index + 1}</td>
							<td className='border px-1 py-2 '>{medication.drugs}</td>
							<td className='border px-1 py-2 '>{medication.indication}</td>
							<td className='border px-1 py-2'>{medication.notes}</td>
							<td className='border px-1 py-2 '>{medication.durations}</td>
							<button
								className='p-2 ml-2 rounded bg-red-500 text-white'
								onClick={() => {
									const updatedMedicationHistory = [...medicationHistory];
									updatedMedicationHistory.splice(index, 1);
									setMedicationHistory(updatedMedicationHistory);
								}}
							>-</button>
						</tr>
					))}
					</tbody>
				</table>

			</div>
			<div className='flex items-center justify-between pb-6 mb-3'>
				<button
					type="submit"
					className='bg-[#159686] hover:bg-blue-700 text-white font-bold 
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