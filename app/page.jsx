import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='h-full w-full border-1 border-emerald-50 flex content-center'>
      <div className='w-1/2 h-full flex justify-center items-center'>
        <Image src='/assets/images/jugitjoga.jpg' width={100} height={300}></Image>
      </div>
      <div className='w-1/2 h-full flex justify-center items-center'>Right</div>
    </div>
  );
};

export default Home;
