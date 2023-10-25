import { navbarBtnsData } from '@constants';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { getPlayLink } from '@utilities/dev';

export default function Footer() {
  const { locale } = useRouter();

  return (
    <footer className=' overflow-visible '>
      <div className=' bag-foot  bg-cover bg-no-repeat '>
        <div className='container-full md:pt-[150px] pt-[70px] pb-[50px]'>
          <div className='space-y-[23px] flex md:flex-row flex-col justify-between'>
            <div className='flex md:justify-between justify-center'>
              <Link href='/'>
                <div className='md:w-[250px] w-[150px] px-[10px]'>
                  <Image
                    src='/assets/main/logo-with-text-nobg.png'
                    alt='logo'
                    layout='responsive'
                    width={235}
                    height={112}
                  />
                </div>
              </Link>
            </div>

            <div className=' flex  '>
              <div>
                <ul className='flex flex-row items-center gap-x-[10px]'>
                  {navbarBtnsData.map((load) => (
                    <li
                      key={load.title}
                      className='text-white lg:border-r-[2px] border-white md:pr-[18px] pr-[5px] last:border-0'
                    >
                      <Link href={load.linkTo} locale={locale}>
                        <div className='text-navbar transition-all hover:scale-105 hover:text-amber-400'>
                          {load.trans}
                        </div>
                      </Link>
                    </li>
                  ))}
                  <Link href={getPlayLink()}>
                    <button
                      type='button'
                      className='hover:scale-105 hover:transition-all hover:text-amber-600  md:w-[100px] w-[70px] bg-gradient-to-r from-golden to-golden rounded-[5px]  md:py-[5px] py-[5px] text-li text-black font-bold  '
                    >
                      馬上註冊
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t-[1px] border-gray-600'>
          <div className='container-full-px py-[20px]'>
            <p className=' text-slate-50 text-16px text-center'>2023 Copyright © 買馬易 Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
