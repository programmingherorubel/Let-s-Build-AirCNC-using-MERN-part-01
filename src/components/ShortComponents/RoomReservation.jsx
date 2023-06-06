import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const RoomReservation = () => {
   
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row item-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ 200</div>
                <div className='font-light text-neutral-600'>Night</div>
            </div>
            <hr />
            <div className='flex justify-center '>
            <DateRange
            rangeColors={['#262626']}
            date={new Date()}
            direction='vertical'
            showDateDisplay={false}
            minDate={new Date()}
            />
            </div>
        </div>
    );
};

export default RoomReservation;