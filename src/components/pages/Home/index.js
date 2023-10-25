import React from 'react';
import Banner from './banner';
import Finance from './finance';
import Group from './group';
import Foot from './footer';
import Benifit from './benifit';

export default function Home() {
  return (
    <main className=''>
      <section className='  container-fluid bg-baner md:bg-top bg-right-top bg-cover bg-no-repeat overflow-hidden pt-[5vh] pb-[20vh]  lg:pb-[23vh]'>
        <div className='container-full'>
          <Banner />
        </div>
      </section>

      <section className='container-fluid bg-carosel bg-gray3 bg-cover bg-no-repeat overflow-hidden '>
        <div className='container-full '>
          <Finance />
        </div>
      </section>

      <section className='container-fluid bg-gray3   bg-house bg-cover bg-no-repeat'>
        <div className='container-full '>
          <Group />
        </div>
        <div className=' py-[20px] w-full overflow-hidden '>
          <Benifit />
        </div>
        <div className='md:mb-[-32px] mb-[-29px] z-20 '>
          <Foot />
        </div>
      </section>
    </main>
  );
}
