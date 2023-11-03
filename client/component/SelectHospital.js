import React, { useState } from 'react';
import { stateList } from '../public/data.js';
import { hospital } from '../public/data.js';
import { specialization } from '../public/data.js';

function SelectHospital() {

  const [selectedHospital, setSelectedHospital] = useState("");
  function setLocation(event) {
    const selectedHospital = event.target.value;
    setSelectedHospital(selectedHospital);
  }

  return (
    <div class="grid grid-cols-2 gap-2 pb-7">
      <div className="  b vmt-2">
        <label for="area-name" class="block text-sm font-medium text-gray-900"> Area </label>
        <select id="area-name" name="area-name" autoComplete="area" className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={setLocation}>
          <option>-Select Area-</option>
          {stateList.map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label for="hospital-name" class="block text-sm font-medium text-gray-900"> Hospital </label>
        <div className="mt-2">
          <select id="hospital-name" name="hospital-name" autoComplete="hospital" className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>-Select Hospital-</option>
            {hospital.map((hospital, index) => (
              selectedHospital === hospital.location && (
                <option key={index}>{hospital.name}</option>
              )
            ))}
          </select>
        </div>
      </div>

      <div>
        <label for="specialty" class="block text-sm font-medium text-gray-900">Specialty</label>
        <div class="mt-2">                
          <select id="specialty" name="specialty" autocomplete="specialty-name" class="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>-Select Specialization-</option>
            {specialization.map((special, index) => (
            <option key={index}>{special}</option>
            ))}
          </select>                
        </div>
      </div>
    </div>
  )
}

export default SelectHospital;

