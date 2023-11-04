"use client"
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'MedAppoint',
// }

export default function RootLayout({ children }) {

  const [popupVisible, setPopupVisible] = useState(false);

	const togglePopup = () => {
  	setPopupVisible(!popupVisible);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='bg-gray-800'>
          <div className='mx-auto max-w-7xl'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  {/* <img class="h-8 w-auto" src="" alt="MedAppoint" /> */}
                  <h2 className='font-bold text-white text-2xl'>MedAppoint</h2>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex'>
                    <a href="/booking" className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' aria-current="page">Booking</a>
                    <a href="#" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={togglePopup}>Queque</a>
                    <a href="#" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Try Premium</a>
                  </div>
                </div>
              </div>

              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='relative ml-3'>
                  <div>
                    <button type="button" className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className='absolute -inset-1.5'></span>
                      <span className='sr-only'>Open user menu</span>
                      <img className='h-8 w-8 rounded-full' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}

          {popupVisible && (
        		<div id="mypopup" className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10' >
          			<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						      <div id="mypopup" className='relative z-10' aria-labelledby="modal-title" role="dialog" aria-modal="true">

							    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
							    <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
								    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
									    <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>

                        <div className='flex flex-row justify-end'>
                          <button type="button" className='bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100' onClick={togglePopup}>
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
          		</div>
        		</div>
     		  )}
      </body>
    </html>
  )
}
