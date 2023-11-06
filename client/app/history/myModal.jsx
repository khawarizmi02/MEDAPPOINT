import React from 'react'

const MyModal = ({visible , onClose}) => {

  const handleOnClose = (e) => {
    if(e.target.id === 'container') onClose();
  }

  if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className='bg-black fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-2 rounded'>
        <p>My Modal</p>
        {/* <button onClick={onClose}>X</button> */}

        {/* <div className="bg-white pt-5 p-5">
               <h4 className="font-bold">Medication History:</h4>
	 				<table className="table-auto w-full">
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
          	<p>{chiefComplain}</p>
          	<p>{diagnosis}</p>
          	<p>{HPI}</p>
        	</div>
     	 	</div> */}

      </div>
    </div>
  )
}

export default MyModal