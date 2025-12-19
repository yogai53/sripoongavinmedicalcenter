import { Logo } from '@/assets';
import { hospitalName } from '@/constants/hospital';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDoctorsDropdownMobile, setShowDoctorsDropdownMobile] = useState(false);
  return (
    <>
      <nav
        className='z-50 flex items-center justify-between p-2 mx-auto max-w-7xl lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5 flex items-center'>
            <span className='sr-only'>{hospitalName}</span>

            <Image src={Logo} alt={hospitalName} className='w-24 h-auto lg:w-36' />
            <h3 className='text-lg font-semibold text-paleSky-700'>{hospitalName}</h3>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='w-6 h-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 items-center'>
          <Link href='/' className='text-sm font-semibold leading-6 text-paleSky-700'>
            Home
          </Link>
          <Link href='/about' className='text-sm font-semibold leading-6 text-paleSky-700'>
            About
          </Link>
          <Link href='/services' className='text-sm font-semibold leading-6 text-paleSky-700'>
            Services
          </Link>
          <Link href='/departments' className='text-sm font-semibold leading-6 text-paleSky-700'>
            Departments
          </Link>
          <Link href='/facilities' className='text-sm font-semibold leading-6 text-paleSky-700'>
            Facilities
          </Link>
          <div className='relative group'>
            <button className='text-sm font-semibold leading-6 text-paleSky-700 focus:outline-none flex items-center gap-1'>
              Doctors
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            </button>
            <div className='absolute left-0 z-10 hidden mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block group-focus-within:block'>
              <Link
                href='/doctors/chennappan'
                className='block px-4 py-2 text-paleSky-700 hover:bg-gray-100'
              >
                Dr. C Chennappan
              </Link>
              <Link
                href='/doctors/divya'
                className='block px-4 py-2 text-paleSky-700 hover:bg-gray-100'
              >
                Dr. Divya Selvaraju
              </Link>
            </div>
          </div>
          <Link href='/contact' className='text-sm font-semibold leading-6 text-paleSky-700'>
            Contact
          </Link>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 flex flex-col justify-between w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-700/10'>
          <div className='p-6'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>{hospitalName}</span>
                <h3 className='text-lg font-semibold text-paleSky-700'>{hospitalName}</h3>
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='w-6 h-6' aria-hidden='true' />
              </button>
            </div>
            <div className='flow-root mt-6'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div
                  className='py-6 space-y-2 text-center'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link
                    href='/'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    Home
                  </Link>
                  <Link
                    href='/about'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    About
                  </Link>
                  <Link
                    href='services'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    Services
                  </Link>
                  <Link
                    href='/departments'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    Departments
                  </Link>
                  <Link
                    href='/facilities'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    Facilities
                  </Link>
                  <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-col items-center w-full'>
                      <button
                        type='button'
                        className='block px-3 py-2 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50 w-full text-center'
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowDoctorsDropdownMobile((prev) => !prev);
                        }}
                      >
                        Doctors
                        <svg
                          className='w-4 h-4 inline ml-1'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                        </svg>
                      </button>
                      {showDoctorsDropdownMobile && (
                        <div className='mt-1 flex flex-col items-center bg-white border border-gray-200 rounded shadow-lg w-48 z-20'>
                          <Link
                            href='/doctors/divya'
                            className='px-4 py-2 text-paleSky-700 hover:bg-gray-100 w-full text-center'
                            onClick={() => {
                              setShowDoctorsDropdownMobile(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            Dr. Divya
                          </Link>
                          <Link
                            href='/doctors/chennappan'
                            className='px-4 py-2 text-paleSky-700 hover:bg-gray-100 w-full text-center'
                            onClick={() => {
                              setShowDoctorsDropdownMobile(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            Dr. Chennappan
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <Link
                    href='/contact'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-paleSky-700 hover:bg-gray-50'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
