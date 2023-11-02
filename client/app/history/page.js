'use client';

import React, { useState, useEffect } from 'react';
import HistoryItem from './historyItem.jsx';
import axios from 'axios';

const page = () => {
	const [data, setData] = useState([]);
	const [doctor, setDoctor] = useState([]);
	const [hospital, setHospital] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dataResponse = await axios.get('http://localhost:5000/healthRecord/653d0d0f68f2e28c3741ed26');
				const dataWithDoctorAndHospital = await Promise.all(dataResponse.data.map(async item => {
					const doctorResponse = await axios.get(`http://localhost:5000/chief/${item.chief}`);
					const hospitalResponse = await axios.get(`http://localhost:5000/healthcenter/${item.healthCenter}`);
					return {
						...item,
						doctor: doctorResponse.data,
						hospital: hospitalResponse.data
					};
				}));
				setData(dataWithDoctorAndHospital);
			} catch (error) {
				console.error('Error fetching data', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center">
			{data.map((item) => (
				<HistoryItem
					hospitalName={item.hospital.healthCenter.name}
					doctorName={item.doctor.name}
					doctorID={item.doctor.idNum}
					date={item.dateSubmit}
					diagnosis={item.diagnosis}
					chiefComplain={item.chiefComplain}
					HPI={item.HPI}
					pastMedicalHistory={item.PMHx}
					medicationHistory={item.medicationHistory}
				/>
			))}
		</div>
	);
};

export default page;
