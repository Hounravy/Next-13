import React from 'react';

export default function Group() {
  return (
    <>
      <div className='flex justify-center items-center py-[40px]'>
        <div className=' text-center'>
          <h5 className='text-golden font-bold text-title'>賽馬過關計算機</h5>
        </div>
      </div>

      <div className=' py-[20px]'>
        <div className=' grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-0 gap-y-[20px]  text-white'>
          <div className=' flex flex-col gap-[30px] bg-slate-50 bg-opacity-10  pl-[80px] py-[60px] pr-[50px]'>
            <div className='flex flex-col  gap-y-[10px]'>
              <span className='indent-[-35px] text-amber-400 font-semibold text-subtitle'>
                ⭐ 獨贏（Win）
              </span>
              <p className=' text-li '>
                {' '}
                選擇一匹馬，只要它在比賽中贏得冠軍，你就贏得獎金。如果有兩匹馬同時獲勝，你也可以獲得獎金。
              </p>
            </div>

            <div className='flex flex-col  gap-y-[10px]'>
              <span className=' indent-[-35px] text-amber-400 font-semibold  text-subtitle '>
                ⭐ 位置（Place）
              </span>
              <p className=' text-li '>
                選擇一匹馬，只要它進入前兩名或前三名，你就可以贏得獎金。你可以選擇一匹或多匹馬進行投注。
              </p>
            </div>
          </div>

          <div className=' flex flex-col gap-[30px] bg-gray-600 bg-opacity-10  pl-[80px] py-[60px] pr-[50px]'>
            <div className='flex flex-col  gap-y-[10px]'>
              <span className=' indent-[-35px] text-amber-400 font-semibold  text-subtitle '>
                ⭐ 連贏（Quinella）
              </span>
              <p className=' text-li '>
                選擇兩匹馬，只要它們在比賽中表現出色，不需要指定名次，你就可以贏得獎金。
              </p>
            </div>

            <div className='flex flex-col  gap-y-[10px]'>
              <span className=' indent-[-35px] text-amber-400 font-semibold  text-subtitle '>
                ⭐ 位置Q（Quinella Place）
              </span>
              <p className=' text-li '>
                選擇兩匹或更多的馬，只要它們進入前三名，不需要指定名次，你就可以贏得獎金。
              </p>
            </div>
          </div>

          <div className=' flex flex-col gap-[30px] bg-amber-400 bg-opacity-10  pl-[80px] py-[60px] pr-[50px]'>
            <div className='flex flex-col  gap-y-[10px]'>
              <span className=' indent-[-35px] text-amber-400 font-semibold  text-subtitle '>
                ⭐ 三重彩（Trio）
              </span>
              <p className=' text-li '>
                選擇三匹馬，需要正確預測它們的順序，如果全中，你就可以贏得獎金。
              </p>
            </div>

            <div className='flex flex-col  gap-y-[10px]'>
              <span className=' indent-[-35px] text-amber-400 font-semibold  text-subtitle '>
                ⭐ 四連環（First 4）
              </span>
              <p className=' text-li '>
                選擇四匹馬，不需要指定順序，只要它們進入前四名，你就可以贏得獎金。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
