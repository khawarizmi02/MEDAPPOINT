import React, {useState, useEffect} from 'react';

const HistoryItem = ({
  hospitalName,
  doctorName,
  doctorID,
  date,
  diagnosis,
  chiefComplain,
  HPI,
  pastMedicalHistory,
  medicationHistory,
}) => {

	function handleDate(date) {
		return date.split('T')[0];
	}

  return (
    <div className="bg-white-800 w-[800px] pt-10 ">
      <div className="bg-[#A7E2DB] p-10 rounded-3xl">
        <div className="flex flex-row justify-between w-full mb-3">
          <h1 className="font-bold">{hospitalName}</h1>
          <h1 className="font-bold">{doctorName}</h1>
          <h1 className="font-bold">{doctorID}</h1>
        </div>

        <div className="flex flex-col bg-white p-5 rounded-xl mb-2">
          <div className="flex flex-row justify-between">
            <h4 className="font-bold">Past Medical History:</h4>
            {handleDate(date)}
          </div>
          <p>{pastMedicalHistory}</p>
        </div>

				<div className='bg-white w-full py-3 flex rounded-xl mb-2'>
					<div className='font-bold px-2'>Chief Complain (cc):</div>
					<div className='pl-2'>{chiefComplain}</div>
				</div>

        <div className="bg-white pt-5 p-5 rounded-xl ">
          <h4 className="font-bold">Medication History:</h4>
					<table className="table-auto w-full border-2 mb-2">
  				<thead>
    			<tr>
     		 	<th className='px-1 py-2'>#</th>
      		<th className='px-1 py-2'>Drugs</th>
      		<th	className='px-1 py-2'>Indication</th>
      		<th className='px-1 py-2'>Notes</th>
      		<th className='px-1 py-2'>Duration</th>
    			</tr>
  				</thead>
  				<tbody>
    			{medicationHistory.map((item, index) => (
      		<tr key={index} className='bg-gray-100'>
        		<td className='border px-1 py-2'>{index + 1}</td>
        		<td className='border px-1 py-2'>{item.drugs}</td>
        		<td className='border px-1 py-2'>{item.indication}</td>
        		<td className='border px-1 py-2'>{item.notes}</td>
        		<td className='border px-1 py-2'>{item.durations} days</td>
      		</tr>
    			))}
  				</tbody>
				</table>

        	<div>
          	{/* <p>{chiefComplain}</p> */}
			<div>
				<h1 className='font-bold'>Diagnosis:</h1>
				<p className='mb-2'>{diagnosis}</p>
				<h1 className='font-bold'>HPI:</h1>
          		<p>{HPI}</p>
			</div>
          	
        	</div>
     	 	</div>
      </div>
    </div>
  );
};

export default HistoryItem;
