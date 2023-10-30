import React from "react";
import HistoryItem from './historyItem.jsx'

const page = () => {

    const data = [{
        hospitalName: 'Hosp. Shah Alam',
        doctorName: 'Dr. Khawarizmi',
        doctorID: 124769,
        date: '12 Oct 2023',
        pastMedicalHistory: 'Lorem ipsum dolor sit amet consectetur. Interdum tortor purus et aliquam augue eget. Ipsum nibh ac commodo aenean lobortis sagittis aliquam lectus donec. Tristique est lobortis erat o',
        medicationHistory: 'Lorem ipsum dolor sit amet consectetur. Interdum tortor purus et aliquam augue eget. Ipsum nibh ac commodo aenean lobortis sagittis aliquam lectus donec. Tristique est lobortis erat o',
    },
    {
        hospitalName: 'Hosp. Shah Alam',
        doctorName: 'Dr. Khawarizmi',
        doctorID: 124769,
        date: '12 Oct 2023',
        pastMedicalHistory: 'Lorem ipsum dolor sit amet consectetur. Interdum tortor purus et aliquam augue eget. Ipsum nibh ac commodo aenean lobortis sagittis aliquam lectus donec. Tristique est lobortis erat o',
        medicationHistory: 'Lorem ipsum dolor sit amet consectetur. Interdum tortor purus et aliquam augue eget. Ipsum nibh ac commodo aenean lobortis sagittis aliquam lectus donec. Tristique est lobortis erat o',
    },]
  return (
    <div className="flex flex-col items-center">
            {data.map((item, idx) => ( 
                <HistoryItem 
                key={idx}
                hospitalName={item.hospitalName}
                doctorName={item.doctorName}
                doctorID={item.doctorID}
                date={item.date}
                pastMedicalHistory={item.pastMedicalHistory}
                medicationHistory={item.medicationHistory}
            />
            ))}
    </div>
  )
}

export default page