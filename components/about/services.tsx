import Image from 'next/image';
import { About1, About2, About3, About4 } from '@/assets';

export default function Services() {
  return (
    <div className='grid gap-8 lg:grid-cols-4'>
      <div className='flex flex-col gap-4 '>
        <Image src={About1} alt='Healthcare for Kids' />
        <p className='text-xl font-bold text-paleSky-700'>Healthcare for Kids</p>
        <p className='text-gray-400'>Promoting a Brighter and Healthier Future</p>
      </div>
      <div className='flex flex-col gap-4 '>
        <Image src={About2} alt='Medical Counselling' />
        <p className='text-xl font-bold text-paleSky-700'>Medical Counselling</p>
        <p className='text-gray-400'>
          Expert guidance to improve your health and well-being through medical counseling.
        </p>
      </div>
      <div className='flex flex-col gap-4 '>
        <Image src={About3} alt='Modern Equipments' />
        <p className='text-xl font-bold text-paleSky-700'>Modern Equipments</p>
        <p className='text-gray-400'>Our hospital is equipped with the latest medical equipment.</p>
      </div>
      <div className='flex flex-col gap-4 '>
        <Image src={About4} alt='Qualified Doctors' />
        <p className='text-xl font-bold text-paleSky-700'>Qualified Doctors</p>
        <p className='text-gray-400'>Trusted expertise for your health</p>
      </div>
    </div>
  );
}
