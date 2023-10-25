import Image from 'next/image';
import Link from 'next/link';
import { getPlayLink } from '@utilities/dev';

const benifit = () => {
  return (
    <div className=' flex md:flex-row flex-col justify-between gap-[80px] text-white  pb-[50px]'>
      <div className=' lg:ml-[-400px] md:ml-[-300px] ml-[-140px] lg:w-[1000px] md:w-[800px] w-[500px]'>
        <Image src='/assets/main/house-2.gif' alt='gif' width={1186} height={1027} />
      </div>

      <div className=' md:w-1/2 w-full flex justify-center items-center '>
        <div className=' md:text-left text-center space-y-[20px] '>
          <div>
            <h5 className='text-golden font-bold text-title'>參加買馬易 享受眾多優質</h5>
          </div>
          <div className=' text-left '>
            <ul className='list-disc px-[30px] space-y-[15px]'>
              <li className='text-li'>合法線上賭馬網牌照營運 </li>
              <li className='text-li'>24小時在線客服 </li>
              <li className='text-li'>入金出金 秒速到帳</li>
              <li className='text-li'>多種儲值方式</li>
              <li className='text-li'>優惠不斷回贈 </li>
              <li className='text-li'>現場直播 身臨其境</li>
              <li className='text-li'>激情速度 精彩不斷 </li>
              <li className='text-li'>優惠不斷回贈 </li>
            </ul>
          </div>

          <div className=' pt-[40px] space-y-[20px]'>
            <h5 className='text-golden font-bold text-title'>為何選擇賭馬要在買馬易？</h5>
            <p className='text-p pb-[15px]'>
              我們玩家最看重是誠信，守信用，客服態度好，解決
              <br />
              問題快，這些條件只有在我們平台買馬易才能感受得到的。快來到買馬易，讓你感受最佳賭馬體驗
            </p>
            <Link href={getPlayLink()}>
          
                <button
                  type='button'
                  className='hover:scale-105 hover:transition-all hover:text-amber-600 bg-gradient-to-r from-golden to-golden rounded-[5px] w-[150px] py-[10px] text-li text-black font-bold'
                >
                  前往官網
                </button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default benifit;
