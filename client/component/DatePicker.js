import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [selectedDate, setSelectedDate] = React.useState(dayjs('2022-04-17'));
  const [selectedSession, setSelectedSession] = useState(null);

  function setSession(event) {
    const selectedSession = event.target.value;
    setSelectedSession(selectedSession);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (

    <div className="flex flex-row">

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        
              <DemoItem>
                <DateCalendar views={['day']} value={selectedDate} onChange={handleDateChange} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        

        <div class="w-1/3">
          <label for="session" class="block text-sm font-medium text-gray-900"> Session </label>
          <select id="session" name="session" autoComplete="book-session" className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={setSession}>
            <option>-Select Session-</option>
            <option value='0'> Morning </option>
            <option value='1'> Evening </option>
            <option value='2'> Night   </option>
          </select>
        </div>
        


        {/* <div>
            Selected Date: {selectedDate.format('YYYY-MM-DD')}
            Selected Date: {selectedSession}
        </div> */}
    </div>
    
  );
}