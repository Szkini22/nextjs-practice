import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='w-full h-[70px] bg-gradient-to-l from-[#FFC374] via-[#F9E897] to-[#7F9F80] flex justify-between align-center items-center rounded-b-2xl px-12 md:px-24'>
      <div className='w-1/3 flex justify-start'>
        <Link href='/'>
          <Image
            src='/assets/images/juyo-logo.png'
            width={60}
            height={50}
          ></Image>
        </Link>
      </div>
      <div className='w-1/3 flex justify-center gap-1'>
        <Link href='https://www.instagram.com/i_judit?igsh=eThwbnowbmE3azg1'>
          <FaInstagram size={40} className='hover:text-[#124076]' />
        </Link>
        <Link href='https://www.facebook.com/judit.istvanovszki'>
          <FaFacebookSquare size={40} className='hover:text-blue-500' />
        </Link>
      </div>
      <div className='w-1/3 flex justify-end font-semibold gap-5'>
        <div className='p-2 hover:bg-[#124076] hover:text-white hover:cursor-pointer hover:rounded-md'>
          About
        </div>
        <div className='p-2 hover:bg-[#124076] hover:text-white hover:cursor-pointer hover:rounded-md'>
          Classes
        </div>
        <div className='p-2 hover:bg-[#124076] hover:text-white hover:cursor-pointer hover:rounded-md'>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
