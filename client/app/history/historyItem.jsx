import React, {useState, useEffect} from 'react';
import MyModal from './myModal';

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

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false)

  return (
	   	<div className='bg-[#8DDBD1] w-full h-screen flex items-center justify-center'>
			<div className='bg-[#A7E2DB] w-2/3 h-2/3 rounded-3xl flex justify-center'>
				<div className='bg-white w-full h-[150px] mx-8 rounded-3xl mt-6 flex  px-8'>
					<div className='font-bold flex flex-col justify-center'>
						<h1>{hospitalName}</h1>
						<h1>{doctorName}</h1>
						<h1>{doctorID}</h1>
						<h1>{handleDate(date)}</h1>
					</div>

					<div className='w-1 h-full bg-[#A7E2DB] ml-4 mx-8'></div>

					<div className='pt-6'>
						<h1 className='font-bold'>Past Medical History:</h1>
						<h3>{pastMedicalHistory}</h3>
						<button onClick={()=> setShowMyModal(true)} className='font-bold underline underline-offset-4 mt-6 hover:cursor-pointer'>Medication History:</button>
            
						{/* <h3>{pastMedicalHistory}</h3> */}
					</div>
				</div>
			</div>
      <MyModal onClose={handleOnClose} visible={showMyModal} />




		</div>


    // <div className="bg-white-800 w-[800px] pt-10 ">
    //   <div className="bg-gray-200 p-10">
    //     <div className="flex flex-row justify-between w-full mb-3">
    //       <h1 className="font-bold">{hospitalName}</h1>
    //       <h1>{doctorName}</h1>
    //       <h1>{doctorID}</h1>
    //     </div>

    //     <div className="flex flex-col bg-white p-5 rounded-lg">
    //       <div className="flex flex-row justify-between">
    //         <h4 className="font-bold">Past Medical History:</h4>
    //         {handleDate(date)}
    //       </div>
    //       <p>{pastMedicalHistory}</p>
    //     </div>

	// 			<div className='bg-gray-100 w-full py-3 flex'>
	// 				<div className='font-bold px-2'>Chief Complain (cc):</div>
	// 				<div className='pl-2'>{chiefComplain}</div>
	// 			</div>

    //     <div className="bg-white pt-5 p-5">
    //       <h4 className="font-bold">Medication History:</h4>
	// 				<table className="table-auto w-full">
  	// 			<thead>
    // 			<tr>
    //  		 	<th className='px-1 py-2'>#</th>
    //   		<th className='px-1 py-2'>Drugs</th>
    //   		<th	className='px-1 py-2'>Indication</th>
    //   		<th className='px-1 py-2'>Notes</th>
    //   		<th className='px-1 py-2'>Duration</th>
    // 			</tr>
  	// 			</thead>
  	// 			<tbody>
    // 			{medicationHistory.map((item, index) => (
    //   		<tr key={index} className='bg-gray-100'>
    //     		<td className='border px-1 py-2'>{index + 1}</td>
    //     		<td className='border px-1 py-2'>{item.drugs}</td>
    //     		<td className='border px-1 py-2'>{item.indication}</td>
    //     		<td className='border px-1 py-2'>{item.notes}</td>
    //     		<td className='border px-1 py-2'>{item.durations} days</td>
    //   		</tr>
    // 			))}
  	// 			</tbody>
	// 			</table>

    //     	<div>
    //       	<p>{chiefComplain}</p>
    //       	<p>{diagnosis}</p>
    //       	<p>{HPI}</p>
    //     	</div>
    //  	 	</div>
    //   </div>
    // </div>
  );
};

export default HistoryItem;
