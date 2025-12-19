import * as assets from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Doctors() {
  return (
    <div className='my-8 lg:my-24'>
      <div className='flex flex-col gap-6 lg:items-center lg:px-64 lg:text-center'>
        <h1 className='text-4xl font-bold text-paleSky-700'>Meet Our Specialists</h1>
        <div className='hidden mt-4 border border-red-800 border-solid lg:w-1/12 lg:block border-y-4'></div>
        {/* <p className="text-gray">
          Experience excellence in healthcare: Get to know our specialist doctor
          Dr. Chennappan.
        </p> */}
      </div>

      <div className='flex flex-col items-center justify-center gap-8 mt-12 lg:flex-row'>
        <div className='flex flex-col items-center h-full justify-start gap-2 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
          <Link href='/doctors/chennappan' className='flex flex-col items-center gap-2 h-full'>
            <Image
              src={assets.DrChennappan}
              alt='Dr.Chennappan'
              className='w-64 h-80 object-contain bg-white'
              width={256}
              height={320}
            />
            <div className='text-center'>
              <p className='text-xl font-bold text-paleSky-700'>Dr Chennappan</p>
              <p className='text-gray-400'>Consultant Physician And Neurologist</p>
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center h-full justify-start gap-2 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
          <Link href='/doctors/divya' className='flex flex-col items-center gap-2 h-full'>
            <Image
              src={assets.DrDivya}
              alt='Dr.Divya'
              className='w-64 h-80 object-contain bg-white'
              width={256}
              height={320}
            />
            <div className='text-center'>
              <p className='text-xl font-bold text-paleSky-700'>Dr Divya Selvaraju</p>
              <p className='text-gray-400'>Obstetrician and Gynaecologist</p>
            </div>
          </Link>
        </div>
        {/* <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/2.jpg" />
          <div>
            <p className="text-xl font-bold text-paleSky-700">Dr Divya</p>
            <p className="text-gray-400">Gynaecologist.</p>
          </div>
        </Link>
        <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/3.jpg" />
          <div>
            <p className="text-xl font-bold text-paleSky-700">Dr Sathya</p>
            <p className="text-gray-400">General Physician.</p>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
