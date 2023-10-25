import { otherBtnsData } from '@constants';
import React from 'react';
import Display from '../Display';

export default function Menu() {
  return (
    <div className='hidden md:block fixed top-1/2 transform -translate-y-1/2 right-5'>
      <ul className='border-[1px] border-white p-[12px] rounded-[12px] bg-black'>
        {otherBtnsData.map((load, idx) => (
          <li key={load.title}>
            {idx !== 0 && (
              <div className='w-full py-[12px]'>
                <Display.Icon name='line' />
              </div>
            )}

            <div className='flex flex-col items-center gap-[12px]'>
              <div className='w-[50px]'>
                <Display.Icon name={load.icon} />
              </div>
              <div>
                <p className='text-white'>{load.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
