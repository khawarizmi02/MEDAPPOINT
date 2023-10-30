import React from 'react'

const HistoryItem = ({hospitalName,doctorName,doctorID,date,pastMedicalHistory,medicationHistory}) => {
  return (
    <div className='bg-white-800 w-[800px] pt-10 '>
        <div className='bg-gray-200 p-10'>
            <div className='flex flex-row justify-between w-full mb-3'>
                <h1 className='font-bold'>{hospitalName}</h1>
                <h1>{doctorName}</h1>
                <h1>{doctorID}</h1>
            </div>
            
            <div className='flex flex-col bg-white p-5 rounded-lg'>
                <div className='flex flex-row justify-between'>
                    <h4 className='font-bold'>Past Medical History:</h4>
                    {date}
                </div>
                <p>{pastMedicalHistory}</p>
            </div>
            <div className='bg-white pt-5 p-5'>
                <h4 className='font-bold'>Medication History:</h4>
                {medicationHistory}
            </div>
        
        </div>
    </div>
  )
}

export default HistoryItem