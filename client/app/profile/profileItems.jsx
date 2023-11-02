import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'

const ProfileItems = ({patientName,icNumber,age,gender,race,email,phoneNumber,weight,height,foodAllergies,drugAllergies}) => {
  return (
    <div className='bg-red-200 w-full h-full flex items-center justify-center'>
        <div className='w-[400px] h-full flex flex-col bg-white p-7'> 
            <h1 className='flex font-bold pb-2'><IoMdArrowBack size={24} className='mr-4 '/> Patient Profile</h1>
            <h1 className='font-bold text-xl'>Name:</h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{patientName}</h1>
            <h1 className='font-bold text-xl pt-2'>IC Number</h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{icNumber}</h1>
            <div className='flex space-x-4 pt-2 mb-2'>
              <h1 className='font-bold text-xl'>Age: </h1>
              <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{age}</h1>
              <h1 className='font-bold text-xl'>Gender: </h1>
              <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{gender}</h1>
            </div>

            <div className='flex'>
              <h1 className='font-bold text-xl pt-2 mb-2 pr-4'>Race:</h1>
              <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{race}</h1>
            </div>
            
            <h1 className='font-bold text-xl pt-2'>Email: </h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{email}</h1>
            <h1 className='font-bold text-xl pt-2'>Phone Number: </h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{phoneNumber}</h1>
            
            <div className='flex'>
              <h1 className='font-bold text-xl pt-2 pr-4'>Weight (kg):</h1>
              <h1 className='bg-gray-200 border-solid border-2 border-black p-2'>{weight}</h1>
            </div>
            <div className='flex mt-2'>
              <h1 className='font-bold text-xl pt-2 pr-4'>Height (cm):</h1>
              <h1 className='bg-gray-200 border-solid border-2 border-black p-2'>{height}</h1>
            </div>
            
            
            <h1 className='font-bold text-xl pt-2'>Food Allergies: </h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{foodAllergies}</h1>
            <h1 className='font-bold text-xl pt-2'>Drug Allergies: </h1>
            <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{drugAllergies}</h1>

        </div>
    </div>
  )
}

export default ProfileItems