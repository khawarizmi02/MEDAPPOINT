"use client"
import React from 'react';
import ProfileItems from './profileItems.jsx';
import { useState, useEffect } from 'react';



const Profile = () => {
    const [patient, setPatient] = useState([])
    useEffect(()=> {
        const fetchPatient = async() => {
            const response = await fetch (process.env.NEXT_PUBLIC_API_PROFILE)
            const data = await response.json()
            setPatient(data)
        }
        fetchPatient()
    },[])
    console.log(patient)
return (
<div className="flex flex-col items-center">
            <ProfileItems 
            patientName={patient.name}
            icNumber={patient.icNum}
            age={patient.age}
            gender={patient.gender}
            race={patient.race}
            email={patient.email}
            phoneNumber={patient.phoneNumber}
            weight={patient.weight}
            height={patient.height}
            foodAllergies={patient.foodAllergies}
            drugAllergies={patient.drugAllergies}
        />
</div>
)
};

export default Profile;

