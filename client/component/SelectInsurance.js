import React, { useState } from 'react';
import {insurance} from '../public/data.js';



function insurances() {
  return (
    <div class="sm:col-span-3">
        <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
        <div class="mt-2">
            <select id="company-name" name="company-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option selected disabled hidden>Select an option</option>
            {insurance.map((insurances, index) => (
                <option key={index}>{insurances}</option>
            ))}
            </select>
        </div>
    </div>
  )
}

export default insurances;


