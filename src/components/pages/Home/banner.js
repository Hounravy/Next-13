import Link from 'next/link';
import React from 'react';
import { getPlayLink } from '@utilities/dev';

export default function Banner() {
  return (
    <div className='lg:py-[100px] md:w-1/2 flex justify-center  pl-[30px]'>
      <div className='flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[100px]'>
        <div className='space-y-[10px]'>
          <h1 className='text-golden font-bold text-42px text-center lg:text-left'>買馬易</h1>
          <p className='whitespace-pre-wrap text-white text-45px text-center lg:text-left font-bold'>
            馬季開鑼 <br />
            始終賽事 超越盛事
          </p>
          <p className=' text-white text-18px text-center lg:text-left'>
            全香港最火最熱門最誠信現金網
          </p>
          <div className='flex justify-center lg:justify-start'>
            <Link href={getPlayLink()}>
              <button
                type='button'
                className='hover:scale-105 hover:transition-all hover:text-amber-600 bg-golden rounded-[5px] w-[150px] py-[10px] text-18px text-black font-bold '
              >
                馬上下注
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
