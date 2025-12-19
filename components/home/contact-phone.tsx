import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { emergencyPhone } from '@/constants/hospital';
import Link from 'next/link';
import { ContactUs } from '@/assets';
import Image from 'next/image';

export default function ContactPhone() {
  return (
    <div className='relative'>
      <Image src={ContactUs} alt='Contact Us' className='w-full h-auto' />
      <div className='p-6 text-2xl font-extrabold text-white cursor-pointer lg:text-4xl lg:left-1 lg:absolute lg:bottom-5 bg-paleSky-500 hover:bg-paleSky-700 active:bg-paleSky-700'>
        <div className='flex flex-row items-center justify-between gap-4 text-center lg:text-left'>
          <PhoneIcon className='w-8 h-8' />
          <Link href={`tel:${emergencyPhone}`}>
            <span className='whitespace-nowrap'>
              {emergencyPhone.substring(0, 3) +
                ' ' +
                emergencyPhone.substring(3, 7) +
                ' ' +
                emergencyPhone.substring(7, 13)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
