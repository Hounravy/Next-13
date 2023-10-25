import { fetchDataByGet, fetchImage, fetcher } from '@service/strapi';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { getPlayLink } from '@utilities/dev';
import BlogCardH from './blogcardH';

export default function BlogsRight() {
  const { data } = useSWR(
    fetchDataByGet('/posts', {
      _limit: 2,
      _sort: 'publish_at:DESC',
    }),
    fetcher
  );

  const { data: ads } = useSWR(fetchDataByGet('/ads'), fetcher);

  return (
    <div>
      <div className='flex flex-col md:flex-row 2xl:flex-col gap-[40px]'>
        <div className='order-1 md:order-2 2xl:order-1'>
          <div className='flex mt-[20px]'>
            <h2 className='text-24px  font-semibold'>MORE ABOUT FINANCAIL</h2>
          </div>

          <div className='my-[40px] space-y-4'>
            {data?.map((load) => (
              <div key={load.id}>
                <BlogCardH load={load} />
              </div>
            ))}
          </div>
        </div>

        <div className='w-full flex-none max-w-[400px] order-2 md:order-1 2xl:order-2'>
          {ads && (
            <Link href={getPlayLink()}>
              <a>
                <div className='mt-4'>
                  <Image
                    src={fetchImage(ads[0].image.url)}
                    alt={ads[0].alternativeText ? ads[0].alternativeText : ads[0].name}
                    layout='responsive'
                    width={ads[0].image.width}
                    height={ads[0].image.height}
                  />
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
