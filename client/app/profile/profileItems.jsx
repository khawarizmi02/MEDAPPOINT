import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'
import {IoPersonCircleSharp} from 'react-icons/io5'

const ProfileItems = ({patientName,icNumber,age,gender,race,email,phoneNumber,weight,height,foodAllergies,drugAllergies}) => {
  return (

    <div className='bg-[#8DDBD1] w-full h-screen flex items-center justify-center'>
      <div className='bg-[#A7E2DB] w-2/3 h-2/3 rounded-3xl flex items-center justify-center space-x-24'>
        <div className=' flex flex-col items-center'>
          <IoPersonCircleSharp size={250}/>
          <h1 className='font-bold text-3xl'>{patientName}</h1>
        </div>
          
        <div className='bg-white grid grid-cols-3 gap-4 p-8 rounded-3xl'>
            <div>
              <h1 className='font-bold'>IC number</h1>
              {icNumber}
            </div>
            <div className='col-span-2'>
              <h1 className='font-bold'>Email</h1>
              {email}
            </div>
            <div>
              <h1 className='font-bold'>Race</h1>
              {race}
            </div>
            <div>
              <h1 className='font-bold'>Weight</h1>
              {weight}
            </div>
            <div>
              <h1 className='font-bold'>Height</h1>
              {height}
            </div>
            <div>
              <h1 className='font-bold'>Gender</h1>
              {gender}
            </div>
            <div>
              <h1 className='font-bold'>Age</h1>
              {age}
            </div>
            <div>
              <h1 className='font-bold'>Phone</h1>
              {phoneNumber}
            </div>
            <div className='col-span-3'>
              <h1 className='font-bold'>Food allergies</h1>
              {foodAllergies}
            </div>
            <div className='col-span-3'>
              <h1 className='font-bold'>Drug allergies</h1>
              {drugAllergies}
            </div>
        </div>
      </div>
    </div>
    // <div className='bg-red-200 w-full h-full flex items-center justify-center'>
    //     <div className='w-[400px] h-full flex flex-col bg-white p-7'> 
    //         <h1 className='flex font-bold pb-2'><IoMdArrowBack size={24} className='mr-4 '/> Patient Profile</h1>
    //         <h1 className='font-bold text-xl'>Name:</h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{patientName}</h1>
    //         <h1 className='font-bold text-xl pt-2'>IC Number</h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{icNumber}</h1>
    //         <div className='flex space-x-4 pt-2 mb-2'>
    //           <h1 className='font-bold text-xl'>Age: </h1>
    //           <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{age}</h1>
    //           <h1 className='font-bold text-xl'>Gender: </h1>
    //           <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{gender}</h1>
    //         </div>

    //         <div className='flex'>
    //           <h1 className='font-bold text-xl pt-2 mb-2 pr-4'>Race:</h1>
    //           <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 pr-3'>{race}</h1>
    //         </div>
            
    //         <h1 className='font-bold text-xl pt-2'>Email: </h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3'>{email}</h1>
    //         <h1 className='font-bold text-xl pt-2'>Phone Number: </h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{phoneNumber}</h1>
            
    //         <div className='flex'>
    //           <h1 className='font-bold text-xl pt-2 pr-4'>Weight (kg):</h1>
    //           <h1 className='bg-gray-200 border-solid border-2 border-black p-2'>{weight}</h1>
    //         </div>
    //         <div className='flex mt-2'>
    //           <h1 className='font-bold text-xl pt-2 pr-4'>Height (cm):</h1>
    //           <h1 className='bg-gray-200 border-solid border-2 border-black p-2'>{height}</h1>
    //         </div>
            
            
    //         <h1 className='font-bold text-xl pt-2'>Food Allergies: </h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{foodAllergies}</h1>
    //         <h1 className='font-bold text-xl pt-2'>Drug Allergies: </h1>
    //         <h1 className='bg-gray-200 border-solid border-2 border-black p-1 pl-3 mb-4'>{drugAllergies}</h1>

    //     </div>
    // </div>
  )
}

export default ProfileItems