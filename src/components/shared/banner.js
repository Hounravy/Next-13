import Image from 'next/image';
import React from 'react';

export default function Banner({ dataSource }) {
  return (
    <div>
      <div className='hidden md:block'>
        <Image
          src={dataSource[0].image.url}
          alt={dataSource[0].image.alt}
          layout='responsive'
          width={dataSource[0].image.width}
          height={dataSource[0].image.height}
        />
      </div>
      <div className='md:hidden'>
        <Image
          src={dataSource[0].imageMBL.url}
          alt={dataSource[0].imageMBL.alt}
          layout='responsive'
          width={dataSource[0].imageMBL.width}
          height={dataSource[0].imageMBL.height}
        />
      </div>
    </div>
  );
}
