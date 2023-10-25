import { navbarBtnsData } from '@constants';
import { localesData } from '@constants/mocks/locales';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import { FaCheck, FaEarthAsia } from 'react-icons/fa6';
import { HiOutlineMenu } from 'react-icons/hi';
import { getPlayLink } from '@utilities/dev';

export default function Navbar() {
  const { asPath, locale } = useRouter();

  const [active, setActive] = useState('');
  const [showLocale, setShowLocale] = useState(false);
  const [showMenu, setShowMenu] = useState(null);

  useEffect(() => {
    if (asPath) {
      if (asPath.includes('seo') || asPath.includes('sem') || asPath.includes('other')) {
        setActive('/service');
      } else {
        setActive(asPath);
      }
    }
  }, [asPath]);

  return (
    <nav className='sticky top-0 z-30 bg-gray3'>
      <div className='container-full-px'>
        <div className='flex items-center justify-between py-2 md:py-0'>
          <div className='py-[10px] lg:py-[16px] hidden lg:block'>
            <Link href='/'>
         
                <div className='w-[150px] md:w-[250px]'>
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

          <div className='hidden lg:block'>
            <ul className='flex items-center gap-[40px]'>
              {navbarBtnsData?.map(
                (load) =>
                  load.show && (
                    <li key={load.title}>
                      <Link href={load.linkTo}>
                        <div
                          className={`text-navbar text-golden ${
                            load.linkTo === active && ' text-amber-600 font-bold'
                          }`}
                        >
                          {load.trans}
                        </div>
                      </Link>
                    </li>
                  )
              )}
              <Link href={getPlayLink()}>
                <button
                  type='button'
                  className=' hover:scale-105 hover:transition-all hover:text-amber-600 w-[100px] bg-gradient-to-r from-golden to-golden rounded-[5px]  py-[10px] text-18px text-black font-bold  '
                >
                  馬上註冊
                </button>
              </Link>

              <li className='flex items-center gap-[18px]'>
                {/* <div className='flex items-center text-golden'>
                   <p>{localesData.find((ele) => ele.locale === locale).display}</p> 
                  <p>简</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-golden'>|</p>
                </div> */}
                <div className='flex items-center relative'>
                  {/* <button
                    disabled
                    type='button'
                    className='text-gray-500'
                    onClick={() => setShowLocale(true)}
                  >
                    <FaEarthAsia />
                  </button> */}

                  {showLocale && (
                    <div className='absolute top-[50px] z-30 left-1/2 transform -translate-x-1/2 bg-gray-100 px-[10px] pb-[10px] pt-[10px] rounded-[10px]'>
                      <div className='arrow-up absolute -top-[15px] left-1/2 transform -translate-x-1/2' />
                      <ul className='space-y-[5px]'>
                        {localesData.map((load) => (
                          <li key={load.id}>
                            <Link href={asPath} locale={load.locale}>
                         
                                <button
                                  type='button'
                                  className={`text-16px px-[10px] rounded-[5px] flex items-center justify-between  gap-[10px] w-full ${
                                    locale !== load.locale ? 'bg-transparent' : 'bg-gray-200'
                                  }`}
                                  onClick={() => setShowLocale(false)}
                                >
                                  <span>{load.title}</span>
                                  {/* <div>
                                    <FaCheck
                                      size={14}
                                      className={locale !== load.locale && 'text-transparent'}
                                    />
                                  </div> */}
                                </button>
                             
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='lg:hidden bg-gray3 sticky top-0 z-30'>
        <div className='container-full-px flex justify-between py-[5px]'>
          <div className='flex items-center gap-[10px]'>
            <div className='py-[10px] lg:py-[16px] lg:hidden'>
              <Link href='/'>
         
                  <div className='w-[100px] md:w-[250px]'>
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
            {/* <div className='flex items-center'>
              <p className='text-white'>
                 {localesData.find((ele) => ele.locale === locale).display} 简
              </p>
            </div>
            <div className='flex items-center'>
              <p className='text-white'>|</p>
            </div> */}
            <div className='flex items-center relative'>
              {/* <button
                type='button'
                disabled
                className='text-white'
                onClick={() => setShowLocale(true)}
              >
                <FaEarthAsia />
              </button> */}

              {showLocale && (
                <div className='absolute top-[50px] z-30 left-1/2 transform -translate-x-1/2 bg-gray-100 px-[10px] pb-[10px] pt-[10px] rounded-[10px]'>
                  <div className='arrow-up absolute -top-[15px] left-1/2 transform -translate-x-1/2' />
                  <ul className='space-y-[5px]'>
                    {localesData.map((load) => (
                      <li key={load.id}>
                        <Link href={asPath} locale={load.locale}>
                        
                            <button
                              type='button'
                              className={`text-16px px-[10px] rounded-[5px] flex items-center justify-between gap-[10px] w-full ${
                                locale !== load.locale ? 'bg-transparent' : 'bg-gray-200'
                              }`}
                              onClick={() => setShowLocale(false)}
                            >
                              <span>{load.title}</span>
                              {/* <div>
                                <FaCheck
                                  size={14}
                                  className={locale !== load.locale && 'text-transparent'}
                                />
                              </div> */}
                            </button>
                        
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center'>
            <button type='button' onClick={() => setShowMenu(true)} className='flex'>
              <HiOutlineMenu size={30} color='#fff' />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`block lg:hidden fixed z-50 top-0 w-full h-screen bg-white ${
          // eslint-disable-next-line no-nested-ternary
          showMenu !== null ? (showMenu ? 'menu-in' : 'menu-out') : 'hidden'
        }`}
      >
        <div className='text-black bg-white'>
          <div className='bg-gray3 py-2 flex justify-end px-[15px]'>
            <Hamburger toggled={showMenu} color='#fff' onToggle={() => setShowMenu(false)} />
          </div>
          <ul className='pt-[20px]'>
            {navbarBtnsData.map(
              (load) =>
                load.show && (
                  <li key='/' className='px-[20px]'>
                    <div className='px-[20px] py-[10px] border-b-[1px]'>
                      <Link href={load.linkTo} locale={locale}>
                       
                          <button type='button' onClick={() => setShowMenu(false)}>
                            {load.trans}
                          </button>
                      
                      </Link>
                    </div>
                  </li>
                )
            )}
            <Link href={getPlayLink()}>
              <button
                type='button'
                className=' m-[20px] w-[100px] bg-gradient-to-r from-golden to-golden rounded-[5px]  py-[10px] text-18px text-black font-bold  '
              >
                馬上註冊
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
