import Image from 'next/image'

export default function Home() {
  return (
  <main className='w-screen h-screen flex flex-col items-center justify-center bg-teal-900'>
    <div className='p-1 bg-red-50 w-3/5 h-5/7 rounded-2xl'>
        <form className='p-3'>
            <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                <div class="mt-10 space-y-10">
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

                    <h2 class="text-base font-semibold leading-7 text-gray-900">Insurance Coverage</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">Optional</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                            <div class="mt-2">
                                <select id="company-name" name="company-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option selected disabled hidden>Select an option</option>
                                    <option>AIA Group</option>
                                    <option>Great Eastern life</option>
                                    <option>Allianz</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="member-id" class="block text-sm font-medium leading-6 text-gray-900">Member ID</label>
                            <div class="mt-2">
                                <input type="text" name="member-id" id="member-id" class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your Member ID"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-end gap-x-6 mt-5">
                    <a href='/bookdate'><button type="button" class="text-sm font-semibold leading-6 text-gray-900">Back</button></a>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
                </div>
        </form>
    </div>
  </main>
  )
}
