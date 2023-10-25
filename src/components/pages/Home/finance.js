import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { getPlayLink } from '@utilities/dev';

const data = [
  {
    id: '1',
    title: '春秋分 (Equinox)',
    dsp: '春秋分（Equinox）是一匹日本出色的純種競賽馬，贏得了多項重要賽事，包括2022年秋季天皇賞、有馬紀念、2023年杜拜司馬經典賽和寶塚紀念。它出生於北海道，由Silk Racing Co. Ltd.的馬主俱樂部擁有，並在美浦訓練中心接受培訓。春秋分的競賽生涯備受矚目，尤其在3歲賽季，以驚人的速度奪得了多個頂級賽事冠軍，讓它被譽為世界上最強的賽馬之一。它的卓越表現讓馬迷們為之喝彩，成為日本賽馬界的明星。',
    image: {
      url: '/assets/home/house-01.webp',
      alt: 'card-1',
      width: 670,
      height: 727,
    },
  },
  {
    id: '3',
    title: '金鎗六十 (Golden Sixty)',
    dsp: '金槍六十是香港賽馬界的傳奇，陳家樑擁有，呂健威訓練，何澤堯騎師。它在多個賽季中獲得榮譽，包括最受歡迎的馬匹、最佳一哩馬、最佳中距離馬和香港馬王。這匹賽馬在賽場上勇猛無敵，打破多項紀錄，成為香港賽馬史上最多勝利次數的賽駒，並在2023年全球馬匹排名中位居首位。金槍六十的傳奇生涯令人驚嘆，堪稱香港賽馬界的一顆璀璨明珠。',
    image: {
      url: '/assets/home/house-02.webp',
      alt: 'card-3',
      width: 670,
      height: 727,
    },
  },
  {
    id: '1',
    title: '金鑽貴人（Lucky Sweynesse）',
    dsp: '金鑽貴人（Lucky Sweynesse）是一匹備受矚目的香港賽馬，2021/2022馬季被評為最佳新馬，2022/2023馬季則榮獲最佳四歲馬和最佳短途馬，並奪得香港速度系列冠軍。由文家良訓練，這匹賽馬在香港賽場上嶄露頭角，連連奪冠，包括香港特區行政長官盃、香港速度系列等多個國際一級賽事。金鑽貴人的表現令人矚目，成為香港賽馬界的新寵，為賽馬迷帶來無盡驚喜。',
    image: {
      url: '/assets/home/house-03.webp',
      alt: 'card-1',
      width: 670,
      height: 727,
    },
  },
];

export const Btn = () => {
  return (
    <>
      <Link href={getPlayLink()}>
       
          <button
            type='button'
            className=' hover:scale-105 hover:transition-all hover:text-amber-600  bg-gradient-to-r from-golden to-golden text-black font-bold rounded-[5px] w-[150px] py-[10px] text-li'
          >
            閱讀更多
          </button>
       
      </Link>
    </>
  );
};
export default function Finance() {
  const handlePrevClick = () => {};

  const handleNextClick = () => {};
  const renderPrevButton = () => {
    return (
      <button type='button' onClick={handlePrevClick}>
        <BsChevronLeft className=' text-white hover:text-amber-400 hover:scale-110 relative lg:absolute left-[-50px] top-[50%] text-title font-bold' />
      </button>
    );
  };

  const renderNextButton = () => {
    return (
      <button type='button' onClick={handleNextClick}>
        <BsChevronRight className=' text-white hover:text-amber-400 hover:scale-110 relative lg:absolute lg:right-[0px] right-[-50px] top-[50%] text-title font-bold' />
      </button>
    );
  };
  return (
    <>
      <div className='space-y-[40px] md:space-y-[24px] '>
        <h5 className=' font-bold text-center text-golden text-title pt-[60px]'>最佳的三匹马</h5>

        <AliceCarousel
          autoPlay
          autoPlayInterval={3000} // Set your desired interval in milliseconds
          infinite
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          {data.map((load) => (
            <div className=' w-full  md:p-[27px]  '>
              <div
                key={load.id}
                className='flex flex-col lg:flex-row gap-[50px] md:gap-[20px] items-center'
              >
                <div className='w-full  space-y-[19px] '>
                  <h3 className='font-bold text-subtitle text-golden lg:text-left text-center'>
                    {load.title}
                  </h3>

                  <p className='whitespace-pre-wrap text-white text-p'>{load.dsp}</p>
                  <div className='flex justify-center lg:justify-start'>
                    <Btn />
                  </div>
                </div>
                <div className='w-full lg:order-last order-first '>
                  <div className=' space-x-[10px]'>
                    <div className=' flex justify-center items-center'>
                      <div className=' lg:w-[450px] md:w-[400px] w-[300px] '>
                        <Image
                          src={load.image.url}
                          alt={load.image.alt}
                          layout='responsive'
                          width={load.image.width}
                          height={load.image.height}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </>
  );
}
