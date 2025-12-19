import React from 'react';
import Image from 'next/image';
import { MMC, KAPV, WLHG } from '@/assets/education';

export default function Education() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='grid gap-4 lg:mt-6 lg:grid-cols-2'>
        <div className='flex items-center gap-4'>
          <Image src={KAPV} alt='KAPV Govt Medical College' className='w-24' />
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-gray-600'>MBBS - 2008</p>
            <p className='text-xl font-semibold text-paleSky-700'>
              KAPV Govt Medical College, Trichy
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Image src={MMC} alt='Madras Medical College' className='w-24' />
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-gray-600'>MD - 2013</p>
            <p className='text-xl font-semibold text-paleSky-700'>
              Madras Medical College, Chennai
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Image src={WLHG} alt='World Laparoscopy Hospital Gurgaon' className='w-24' />
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-gray-600'>FMAS - 2016</p>
            <p className='text-xl font-semibold text-paleSky-700'>
              World Laparoscopy Hospital, Gurgaon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
