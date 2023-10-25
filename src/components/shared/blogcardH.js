import { fetchImage } from '@service/strapi';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import SocialSM from './socialSM';

export default function BlogCardH({ load }) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div>
        <Link href={`/blog${load.linkTo}`}>
          <a title={`/blog${load.linkTo}`}>
            <Image
              src={fetchImage(load.images[0].url)}
              alt={
                load.images[0].alternativeText
                  ? load.images[0].alternativeText
                  : load.images[0].name
              }
              layout='responsive'
              width={load.images[0].width}
              height={load.images[0].height}
            />
          </a>
        </Link>
      </div>
      <div className='col-span-2'>
        <div>
          <Link href={`/blog${load.linkTo}`}>
            <a title={`/blog${load.linkTo}`}>
              <div>
                <p className='text-18px text-primay font-bold line-clamp-1'>{load.title}</p>
              </div>
            </a>
          </Link>
          <div className='mt-2'>
            <p className='text-12px text-black line-clamp-2'>{load.description}</p>
          </div>
        </div>

        <div className=''>
          <SocialSM data={load} url={`/blog${load.linkTo}`} direction='right' />
        </div>
      </div>
    </div>
  );
}
