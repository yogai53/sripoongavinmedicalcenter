import { bookingPhone } from '@/constants/hospital';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import * as assets from '@/assets';
import Education from '@/components/doctors/divya/education';
import Experience from '@/components/doctors/divya/experience';
import FieldOfInterest from '@/components/doctors/divya/field-of-interest';
import { MetaTags } from '@/components/common';

export default function DoctorDivya() {
  return (
    <div>
      <MetaTags
        title='Shri Poongavin Medical Center, Krishnagiri'
        description='Doctor Dr. Divya Selvaraju, MD(OG), FMAS. Assistant Professor, Government Medical College, Krishnagiri and Consultant, Shri Poongavin Medical Centre, Krishnagiri. Obstetrics and Gynaecology specialist.'
        keywords="Doctor Dr. Divya Selvaraju, MD(OG), FMAS, Obstetrics, Gynaecology, Krishnagiri, Women's Health"
        url='https://sripoongavinmedicalcentre.com'
        image='/logo.jpeg'
      />
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-12 text-white bg-paleSky-500 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p className='text-2xl'>Doctor</p>
        <p className='text-3xl font-bold lg:text-6xl'>Divya Selvaraju</p>
        <p>
          MD(Obstetrics and gynaecology), FMAS.
          <br />
          Assistant Professor, Government Medical College, Krishnagiri
          <br />
          Consultant, Shri Poongavin Medical Centre, Krishnagiri
        </p>
      </div>
      <div className='flex flex-col gap-6 px-6 py-16 lg:flex-row lg:px-36 justify-center'>
        <div className='flex flex-col gap-4 lg:w-1/3'>
          <Image src={assets.DrDivya} alt='Dr. Divya Selvaraju' className='w-64 rounded-xl' />
          <div>
            <h2 className='text-2xl font-bold text-paleSky-700'>Dr Divya Selvaraju</h2>
            <p className='text-paleSky-700'>
              Assistant Professor, Government Medical College, Krishnagiri
            </p>
            <p className='text-paleSky-700 mt-2'>
              Consultant, Shri Poongavin Medical Centre, Krishnagiri
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:w-2/3 text-paleSky-700 justify-center'>
          <h2 className='text-4xl font-bold '>About</h2>
          <div className='w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4'></div>
          <p>
            Dr. Divya Selvaraju is a consultant Obstetrician and Gynaecologist, practicing in
            Krishnagiri. She has extensive experience in women’s health, providing compassionate
            care and expert treatment for a wide range of obstetric and gynaecological conditions.
            She practices at Shri Poongavin Medical Centre, Krishnagiri, and serves as Assistant
            Professor at Government Medical College, Krishnagiri.
            <br />
            <br />
            She completed her MBBS from KAPV Government Medical College, Trichy in 2008, MD in
            Obstetrics and Gynaecology from Madras Medical College in 2013, and FMAS (Fellowship in
            Minimal Access Surgery) from World Laparoscopy Hospital, Gurgaon in 2016. Her fields of
            interest include High Risk Obstetrics, Endoscopy, and Gynaec Oncology. She is a member
            of the Indian Medical Association and actively participates in academic and clinical
            advancements in her field.
            <br />
            <br />
            Dr. Divya is committed to delivering high-quality patient care, continuous learning, and
            contributing to women’s health through evidence-based practice.
          </p>
          <Link
            href={`tel:${bookingPhone}`}
            className='p-3 px-6 mt-4 text-xl text-center text-white rounded-full bg-paleSky-500 hover:bg-paleSky-700 active:bg-paleSky-900 lg:text-left lg:w-fit'
          >
            <div className='lg:inline'>Book Appointment: </div>
            <div className='lg:inline'>
              {bookingPhone.substring(0, 3) +
                ' ' +
                bookingPhone.substring(3, 7) +
                ' ' +
                bookingPhone.substring(7, 13)}
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-6 py-4 mb-12 lg:px-36 bg-paleSky-50'>
        <h2 className='text-3xl font-bold text-paleSky-700'>Education</h2>
        <div className='w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4'></div>
        <Education />
      </div>
      <div className='flex flex-col gap-4 px-6 py-4 mb-12 lg:px-36 bg-paleSky-50'>
        <h2 className='text-3xl font-bold text-paleSky-700'>Field of Interest</h2>
        <div className='w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4'></div>
        <FieldOfInterest />
      </div>
      <div className='flex flex-col gap-4 px-6 py-4 mb-12 lg:px-36 bg-paleSky-50'>
        <h2 className='text-3xl font-bold text-paleSky-700'>Experience</h2>
        <div className='w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4'></div>
        <Experience />
      </div>
    </div>
  );
}
