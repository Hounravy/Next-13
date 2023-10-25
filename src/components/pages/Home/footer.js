import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const foot = () => {
  return (
    <div className=' relative '>
      <Marquee direction='right' gradient={false} speed={100}>
        <div className=' md:w-[1236px] w-[500px]'>
          <Image src='/assets/main/h-run.png' alt='house' width={1236} height={133} />
        </div>
      </Marquee>
    </div>
  );
};

export default foot;
