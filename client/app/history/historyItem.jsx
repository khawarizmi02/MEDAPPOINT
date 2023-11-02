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
      <div className="bg-gray-200 p-10">
        <div className="flex flex-row justify-between w-full mb-3">
          <h1 className="font-bold">{hospitalName}</h1>
          <h1>{doctorName}</h1>
          <h1>{doctorID}</h1>
        </div>

        <div className="flex flex-col bg-white p-5 rounded-lg">
          <div className="flex flex-row justify-between">
            <h4 className="font-bold">Past Medical History:</h4>
            {handleDate(date)}
          </div>
          <p>{pastMedicalHistory}</p>
        </div>

        <div className="bg-white pt-5 p-5">
          <h4 className="font-bold">Medication History:</h4>
					<table className="table">
  				<thead>
    			<tr>
     		 	<th>#</th>
      		<th>Drugs</th>
      		<th>Indication</th>
      		<th>Notes</th>
      		<th>Duration</th>
    			</tr>
  				</thead>
  				<tbody>
    			{medicationHistory.map((item, index) => (
      		<tr key={index}>
        		<td>{index + 1}</td>
        		<td>{item.drugs}</td>
        		<td>{item.indication}</td>
        		<td>{item.notes}</td>
        		<td>{item.durations} days</td>
      		</tr>
    			))}
  				</tbody>
				</table>

        	<div>
          	<p>{chiefComplain}</p>
          	<p>{diagnosis}</p>
          	<p>{HPI}</p>
        	</div>
     	 	</div>
      </div>
    </div>
  );
};

export default HistoryItem;
