"use client"
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { getHealthCenterData } from './hospital.js';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Home() {

	const div0Ref = useRef(null);
	const div1Ref = useRef(null);
	const div2Ref = useRef(null);

	const initialFormData = {
		medicalConcern: '',
		selectedDate: '',
		session: '',
		notification: [],
		insuranceCompany: '',
		insuranceID: '',
	}

	const [formData, setFormData] = useState(initialFormData);

	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedSession, setSelectedSession] = useState(null);
	const [hospital, setHospital] = useState([]);

	const date = new Date(selectedDate);
	const dayjsDate = dayjs(date).format('YYYY-MM-DD');

	useEffect(() => {
		const fetchData = async () => {
			const data = await getHealthCenterData();
			setHospital(data);
		};

		setFormData(prevFormData => ({ ...prevFormData, session: selectedSession }))
		fetchData();
	}, [selectedSession]);

	useEffect(() => {
		setFormData(prevFormData => ({ ...prevFormData, selectedDate: dayjsDate }))
	}, [selectedDate, dayjsDate]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);
		// try {
		// 	const response = await axios.post('http://localhost:5000/healthrecord', formData);
		// 	console.log(response.data);
		// } catch (error) {
		// 	console.error('Error submitting form', error);
		// }
	};

	function setSession(event) {
		const selectedSession = event.target.value;
		setSelectedSession(selectedSession);
	}

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	function setLocation(event) {
		const selectedHospital = event.target.value;
		setSelectedHospital(selectedHospital);
	}

	const scrollToNext = (ref) => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	};

	return (
		<main className='w-full h-full bg-teal-900'>
			<form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-center'>
				<div ref={div0Ref} className='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl space-y-2'>
					<h2 className='ml-3 text-base font-semibold leading-7 text-gray-900'>Appointment Details</h2>
					<div className='mt-5 mx-3'>
						<div className='grid grid-cols-2 gap-2 pb-7'>
							<div className='mt-5'>
								<label for="area-name" className='block mb-2 text-sm font-medium text-gray-900'> Area </label>
								<select
									id="area-name"
									name="area-name"
									autoComplete="area"
									className='block w-full rounded-md border-0 pl-1.5 py-1.5 
									text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
									focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs 
									sm:text-sm sm:leading-6'
									onChange={handleChange}
								>
									<option selected disabled hidden>-Select Area-</option>
									{hospital.map((item, index) => (
										<option value={item.state} key={index}>{item.state}</option>
									))}
								</select>
							</div>

							<div className='mt-5'>
								<label for="hospital-name" className='block mb-2 text-sm font-medium text-gray-900'> Hospital </label>
								<div className='mt-2'>
									<select
										id="hospital-name"
										name="hospital-name"
										autoComplete="hospital"
										className='block w-full rounded-md border-0 pl-1.5 py-1.5 
										text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
										focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs 
										sm:text-sm sm:leading-6'
										onChange={handleChange}
									>
										<option selected disabled hidden>-Select Hospital-</option>
										{hospital.map((item, index) => (
											<option value={item.name} key={index}>{item.name}</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className='mx-3 col-span-full'>
						<label for="concern" className='block text-sm font-medium leading-6 text-gray-900'>Medical Concern / Request</label>
						<p className='mt-1 text-sm leading-6 text-gray-600'>What is the appointment for?</p>
						<div className='mt-2'>
							<textarea
								id="concern"
								name="concern"
								rows="3"
								className='block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 
								shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
								sm:text-sm sm:leading-6'
								value={formData.medicalConcern}
								onChange={e => setFormData({ ...formData, medicalConcern: e.target.value })}
							/>
						</div>
					</div>
					<div className='flex items-center justify-end gap-x-6 mt-5'>
						<a href='./'>
							<button
								type="button"
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								Back
							</button>
						</a>
						<button
							type="button"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
							text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
							focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={() => scrollToNext(div1Ref)}
						>
							Next
						</button>
					</div>
				</div>

				<div ref={div1Ref} className='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl space-y-2'>
					<div className='flex flex-row'>
						<div>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DemoContainer components={['DateCalendar', 'DateCalendar']}>
									<DemoItem>
										<DateCalendar
											views={['day']}
											value={formData.selectedDate}
											onChange={handleChange}
										/>
									</DemoItem>
								</DemoContainer>
							</LocalizationProvider>
						</div>
						<div className='w-1/3'>
							<label
								for="session"
								className='block text-sm font-medium text-gray-900'
							>
								Session
							</label>
							<select
								id="session"
								name="session"
								autoComplete="book-session"
								className='block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 
								shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
								focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
								onChange={(e) => setSession(e)}
							>
								<option value='Morning'> Morning </option>
								<option value='Evening'> Evening </option>
								<option value='Night'> Night   </option>
							</select>
						</div>

					</div>

					<div className='flex items-center justify-end gap-x-6 mt-5'>
						<button type="button" className='text-sm font-semibold leading-6 text-gray-900'
							onClick={() => scrollToNext(div0Ref)}
						>
							Back
						</button>

						<button type="button" className='rounded-md bg-indigo-600 px-3 
							py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
							focus-visible:outline focus-visible:outline-2 
							focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							onClick={() => scrollToNext(div2Ref)}
						>
							Next
						</button>

					</div>
				</div>

				<div ref={div2Ref} className='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl space-y-2'>
					<h2 className='ml-3 text-base font-semibold leading-7 text-gray-900'>Notifications</h2>
					<span className='ml-3 text-sm leading-6 text-gray-600'>Choose on how you would like to be reminded on your appointment.</span>

					<div className='ml-3'>
						<legend className="mt-5 text-sm font-semibold leading-6 text-gray-900">Notify By:</legend>

						<div className='relative flex gap-x-3 mt-3'>
							<div className='flex h-6 items-center'>
								<input
									id="byEmail"
									name="notification"
									type="checkbox"
									className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
									value="email"
									onChange={(e) => {
										if (e.target.checked) {
											setFormData({ ...formData, notification: [...formData.notification, 'email'] });
										} else {
											setFormData({ ...formData, notification: formData.notification.filter(item => item !== 'email') });
										}
									}}
								/>
							</div>
							<div className='text-sm leading-6'>
								<label htmlFor="byEmail" className='font-medium text-gray-900'>By Email</label>
								<p className='text-gray-500'>Get notified by using registered email.</p>
							</div>
						</div>

						<div className='relative flex gap-x-3 mt-3'>
							<div className='flex h-6 items-center'>
								<input
									id="pushNotify"
									name="notification"
									type="checkbox"
									className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
									value="push"
									onChange={(e) => {
										if (e.target.checked) {
											setFormData({ ...formData, notification: [...formData.notification, 'push'] });
										} else {
											setFormData({ ...formData, notification: formData.notification.filter(item => item !== 'push') });
										}
									}}
								/>
							</div>
							<div className='text-sm leading-6'>
								<label htmlFor="pushNotify" className='font-medium text-gray-900'>Push Notification</label>
								<p className='text-gray-500'>Notification will appear on your phone.</p>
							</div>
						</div>

						<h2 className='mt-10 text-base font-semibold leading-7 text-gray-900'>Insurance Coverage</h2>
						<div className='mt-5 mr-5 grid grid-cols-1 sm:grid-cols-6'>
							<div className='sm:col-span-3'>
								<label for="company-name" className='block text-sm font-medium leading-6 text-gray-900'>
									Company Name
								</label>
								<div className='mt-2'>
									<input
										type="text"
										name="company-name"
										id="company-name"
										className='block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 
										shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6'
										placeholder="Enter your Member ID"
										value={formData.insuranceCompany}
										onChange={(e) => setFormData({ ...formData, insuranceCompany: e.target.value })}
									/>
								</div>
							</div>

							<div className='sm:col-span-3'>
								<label for="member-id" className='block text-sm font-medium leading-6 text-gray-900'>Member ID</label>
								<div className='mt-2'>
									<input
										type="text"
										name="member-id"
										id="member-id"
										className='block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 
										shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6'
										placeholder="Enter your Member ID"
										value={formData.insuranceID}
										onChange={(e) => setFormData({ ...formData, insuranceID: e.target.value })}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-end gap-x-6 mt-5'>
						<a>
							<button
								type="button"
								className='text-sm font-semibold leading-6 text-gray-900'
								onClick={() => scrollToNext(div1Ref)}
							>
								Back
							</button>
						</a>
						<button
							className='rounded-md bg-indigo-600 px-3 py-2 text-sm 
							font-semibold text-white shadow-sm hover:bg-indigo-500 
							focus-visible:outline focus-visible:outline-2 
							focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Next
						</button>
					</div>
				</div>
			</form>
		</main>
	)
}
