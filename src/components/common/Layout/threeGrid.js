import React from 'react';

export default function ThreeGrid({
  leftPanel,
  children,
  rightPanel,
  hideLeft = false,
  hideRight = false,
  gap,
}) {
  return (
    <section className='container-full 2xl:container-fluid'>
      <div className={`flex flex-col 2xl:flex-row ${gap}`}>
        <div className={`flex-none 2xl:w-[360px] relative ${hideLeft ? 'hidden 2xl:block' : ''}`}>
          {leftPanel}
        </div>
        <div className='w-full'>{children}</div>
        <div className={`flex-none 2xl:w-[360px] ${hideRight ? 'hidden 2xl:block' : ''}  `}>
          {rightPanel}
        </div>
      </div>
    </section>
  );
}
