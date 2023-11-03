"use client"
import ComponentPage from '../../component/SelectHospital';
import ComponentPage2 from '../../component/DatePicker';
import ComponentPage3 from '../../component/SelectInsurance';
import React, { useState } from 'react';
import {useRef} from 'react';

export default function Home() {

  const div0Ref = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  const scrollToNext = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  };

  return (
    <main className='w-full h-full bg-teal-900'>
        <form className='w-full h-full flex flex-col items-center'>
          <div ref={div0Ref} class='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl space-y-2'>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Appointment Details</h2>
            <div class="mt-5">
              <ComponentPage />
            </div>

            <div class="col-span-full">
              <label for="concern" class="block text-sm font-medium leading-6 text-gray-900">Medical Concern / Request</label>
              <p class="mt-1 text-sm leading-6 text-gray-600">What is the appointment for?</p>
              <div class="mt-2">
                <textarea id="concern" name="concern" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 mt-5">
              <a href='./'><button type="button" class="text-sm font-semibold leading-6 text-gray-900">Back</button></a>
              <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => scrollToNext(div1Ref)}>Next</button>
            </div>
          </div>

          <div ref={div1Ref} class='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl space-y-2'>
           <ComponentPage2 />
            <div class="flex items-center justify-end gap-x-6 mt-5">
              <button type="button" class="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToNext(div0Ref)}>Back</button>
              <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => scrollToNext(div2Ref)}>Next</button>
            </div>
          </div>

          <div ref={div2Ref} className='p-3 my-24 bg-red-50 w-3/5 h-5/7 rounded-2xl'>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
              <div class="mt-5">
                <fieldset>
                  <legend class="text-sm font-semibold leading-6 text-gray-900">Notify By:</legend>
                  <div class="mt-6 space-y-6">
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="byEmail" name="byEmail" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      </div>
                      <div class="text-sm leading-6">
                        <label for="byEmail" class="font-medium text-gray-900">By Email</label>
                        <p class="text-gray-500">Get notified by using registered email.</p>
                      </div>
                    </div>
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="pushNotify" name="pushNotify" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                      </div>
                      <div class="text-sm leading-6">
                        <label for="pushNotify" class="font-medium text-gray-900">Push Notification</label>
                        <p class="text-gray-500">Notification will appear on your phone.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <h2 class="mt-10 text-base font-semibold leading-7 text-gray-900">Insurance Coverage</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Optional</p>

                <div class="mt-5 grid grid-cols-1 sm:grid-cols-6">
                  <ComponentPage3 />

                  <div class="sm:col-span-3">
                    <label for="member-id" class="block text-sm font-medium leading-6 text-gray-900">Member ID</label>
                    <div class="mt-2">
                      <input type="text" name="member-id" id="member-id" class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your Member ID"/>                            </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-end gap-x-6 mt-5">
                    <a><button type="button" class="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToNext(div1Ref)}>Back</button></a>
                    <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
                </div>
              </div>
        </form>
    </main>
  )
}
