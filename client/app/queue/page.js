"use client"
import React from 'react';

export default function Queue() {

  var popup = document.getElementById("mypopup");

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }

  return (
    <div id="mypopup" onclick="myFunction()" className='relative z-10' aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>

            <div className='flex flex-row justify-end'>
              <button type="button" className='bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <section className='flex flex-col items-center'>
              <h2 className='font-bold tracking-widest text-2xl'>7321</h2>
              <span className='text-sm leading-6 text-gray-600'>Current Turn</span>

              <h2 className='pt-5 font-bold tracking-widest text-2xl'>7323</h2>
              <span className='text-sm leading-6 text-gray-600'>Your Turn</span>
            </section>

            <section className='grid grid-cols-3 py-3'>
              <div className='flex flex-col items-center'>
                <h2 className=''>3</h2>
                <span className='ml-3 text-sm leading-6 text-gray-600'>person ahead of you</span>
              </div>

              <div className='flex flex-col items-center'>
                <h2 className=''> ~ 2</h2>
                <span className='ml-3 text-sm leading-6 text-gray-600'>hours estimated</span>
              </div>

              <div className='flex flex-col items-center'>
                <h2 className=''>3</h2>
                <span className='ml-3 text-sm leading-6 text-gray-600'>room number</span>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>

  );
}

