import { fetchImage } from '@service/strapi';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Social from './social';

export default function BlogCardV({ load }) {
  return (
    <div className=' rounded-sm h-full'>
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
      <div className='mt-4'>
        <div>
          <Link href={`/blog${load.linkTo}`}>
            <a title={load.title}>
              <p className='text-24px text-primary font-bold line-clamp-3'>{load.title}</p>
            </a>
          </Link>
        </div>
        <div className='mt-2'>
          <p className='text-16px  line-clamp-2'>{load.description}</p>
        </div>
      </div>

      <div>
        <Social data={load} url={`/blog${load.linkTo}`} />
      </div>

      <div className='mt-4'>
        {/* <Link href={`/blog${load.linkTo}`}>
          <a className='flex' title={`/blog${load.linkTo}`}>
            <div className='bg-primary px-2 py-1 rounded-md text-12px'>See more</div>
          </a>
        </Link> */}

        <button
          type='button'
          className='border-[1px] border-primary px-5 py-1 rounded-md text-primary text-12px'
          onClick={() => {
            window.location.href = `/blog${load.linkTo}`;
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
