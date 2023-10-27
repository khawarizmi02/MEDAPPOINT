
export default function Home() {
  return (
  <main className='w-screen h-screen flex flex-col items-center justify-center bg-teal-900'>
    <div className='p-1 bg-red-50 w-3/5 h-5/7 rounded-2xl'>
      <form className='p-3'>
        <div class="space-y-2">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Appointment Details</h2>
          <div class="grid grid-cols-2 gap-2 pb-7">
            <div class="mt-5">
              <div class="">
                <label for="area-name" class="block text-sm font-medium text-gray-900">Select Area</label>
                <div class="mt-2">
                  <select id="area-name" name="area-name" autocomplete="area" class="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>-Select Area-</option>
                    <option>Perlis</option>
                    <option>Kedah</option>
                    <option>Kelantan</option>
                    <option>Selangor</option>
                    <option>Penang</option>
                    <option>Perak</option>
                    <option>Terengganu</option>
                    <option>Negeri Sembilan</option>
                    <option>Pahang</option>
                    <option>Melaka</option>
                    <option>Johor</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="">
                <label for="hospital-name" class="block text-sm font-medium text-gray-900">Select Hospital</label>
                <div class="mt-2">
                  <select id="hospital-name" name="hospital-name" autocomplete="hospital" class="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>-Select Hospital-</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="">
                <label for="specialty" class="block text-sm font-medium text-gray-900">Specialty</label>
                <div class="mt-2">
                  <select id="specialty" name="specialty" autocomplete="specialty-name" class="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>-Select Specialization-</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          <div class="col-span-full">
            <label for="concern" class="block text-sm font-medium leading-6 text-gray-900">Medical Concern / Request</label>
            <p class="mt-1 text-sm leading-6 text-gray-600">What is the appointment for?</p>
            <div class="mt-2">
              <textarea id="concern" name="concern" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
       </div>

            <div class="flex items-center justify-end gap-x-6 mt-5">
              <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
            </div>
      </form>
    </div>
  </main>
  )
}
