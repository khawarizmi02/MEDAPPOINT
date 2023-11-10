"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { BsFillBellFill } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'MedAppoint',
// }

export default function RootLayout({ children }) {
	const [queueList, setQueue] = useState([])
	const [booking, setBooking] = useState({})
	const [hospital, setHospital] = useState({})

	useEffect(() => {
		const fetchBooking = async () => {
			try {
				const response = await axios.get('http://localhost:5000/book/653fa8f77e269d6aa672e5fc');
				const hospitalResponse = await axios.get(`http://localhost:5000/healthcenter/${response.data.appointmentInfo.healthCenter}`);
				const queueResponse = await axios.get(`http://localhost:5000/que/${response.data.appointmentInfo.healthCenter}`);
				setBooking(response.data.appointmentInfo);
				setHospital(hospitalResponse.data.healthCenter);
				setQueue(queueResponse.data.queNum);
				// return console.log(queueResponse.data.queNum);
			} catch (error) {
				return console.error('err', error);
			}
		}
		fetchBooking()
	}, [])

	console.log(queueList[queueList.length - 1]);


	const [popupVisible, setPopupVisible] = useState(false);
	const [notiPopup, setNotiPopup] = useState(false);

	const togglePopup = () => {
		setPopupVisible(!popupVisible);
	};

	const toggleNotification = () => {
		setNotiPopup(!notiPopup);
	};

	const handleAccept = async () => {
		const newQueue = queueList[queueList.length - 1] + 1;
		try {
			const que_response = await axios.patch(`http://localhost:5000/que/${hospital._id}`, {
				method: true,
				queNum: newQueue,
			});

			const booking_response = await axios.patch(`http://localhost:5000/book/${hospital._id}`, {
				queNum: newQueue,
			});

			setQueue(prevQueue => [...prevQueue, prevQueue[prevQueue.length - 1] + 1]);
			console.log(newQueue);
		} catch (error) {
			return console.error('err', error);
		}
	}

	const handleCancel = async () => {
		try {
			const response = await axios.delete(`http://localhost:5000/book/${booking._id}`);
			console.log(response.data);
			return response.data;
		} catch (error) {
			return console.error('err', error);
		}
	}

	const getPosition = () => {
		return queueList.indexOf(booking.queNum)
	}

	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between p-3">
					<a href="/"><img src="/logo.png" alt="logo" className="w-30 h-10 ml-20" /></a>

					<div className="flex space-x-12 mr-20 items-center">
						<Link href="/profile">Profile</Link>
						<Link href="/post-report">Post Report</Link>
						<Link href="/history">History</Link>
						<a onClick={togglePopup} className='hover: cursor-pointer'><BsFillBellFill /></a>
						<button className='rounded-lg bg-[#df0000] p-1 px-3 text-white'><Link href="/booking">My Booking</Link></button>
					</div>
				</nav>
				{children}
				{popupVisible && notiPopup && (
					<div id="mypopup" className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10' >
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<div id="mypopup" className='relative z-10' aria-labelledby="modal-title" role="dialog" aria-modal="true">

								<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
								<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>

											<div className='flex flex-row justify-end'>
												<button type="button" className='bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100' onClick={togglePopup}>
													<svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
													</svg>
												</button>
											</div>

											<section className='flex flex-col items-center'>
												<h2 className='pt-5 font-bold tracking-widest text-2xl'>{booking.queNum}</h2>
												<span className='text-sm leading-6 text-gray-600'>Your Turn</span>
											</section>

											<section className='grid grid-cols-3 py-3'>

												<div className='flex flex-col items-center'>
													<h2>{queueList[0]}</h2>
													<span className='text-sm leading-6 text-gray-600'>Current Turn</span>
												</div>

												<div className='flex flex-col items-center'>
													<h2 className=''>{getPosition()}</h2>
													<span className='ml-3 text-sm leading-6 text-gray-600'>person ahead of you</span>
												</div>

												<div className='flex flex-col items-center'>
													<h2 className=''> ~ {(queueList.length - 1) / 2}</h2>
													<span className='ml-3 text-sm leading-6 text-gray-600'>hours estimated</span>
												</div>

											</section>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{popupVisible && !notiPopup && (
					<div id="notipopup" className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10' >
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<div id="notipopup" className='relative z-10' aria-labelledby="modal-title" role="dialog" aria-modal="true">

								<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
								<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>

											<div className='flex flex-row justify-end'>
												<button type="button" className='bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100' onClick={togglePopup}>
													<svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
													</svg>
												</button>
											</div>

											<section className='flex flex-col items-center'>
												<h2 className='ml-3 text-sm leading-6 text-gray-600'>Upcoming appointment at: </h2>
												<h2 className='font-bold tracking-wide text-2xl'>{hospital.name}</h2>

												{/* <h2 className='ml-3 text-sm leading-6 text-gray-600'>Be there before </h2>
                          <h2 className='font-bold tracking-wide text-2xl'>{booking.bookTime}</h2> */}
											</section>

											<section className='flex flex-row justify-center py-5'>
												<a onClick={() => { togglePopup(); handleCancel(); }}>
													<span
														className="inline-flex items-center rounded-md bg-red-50 
															px-2 py-1 text-l font-medium text-red-700 ring-1 ring-inset
														 	ring-red-600/10 hover:cursor-pointer">
														Cancel
													</span>
												</a>
												<a onClick={() => { toggleNotification(); handleAccept(); }}>
													<span
														className="inline-flex items-center rounded-md bg-green-50 
															px-2 py-1 text-l font-medium text-green-700 ring-1 ring-inset
                              ring-red-600/10 hover:cursor-pointer">
														Accept
													</span>
												</a>
											</section>

										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				)}

			</body>
		</html>
	)
}
