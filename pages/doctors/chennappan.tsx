import { bookingPhone } from "@/constants/hospital";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import * as assets from "@/assets";
import { Education, Experience } from "@/components/doctors/chennappan";

export default function DoctorChennapan() {
  return (
    <div>
      <Head>
        <title>
          Sri Poongavin Medical Center. Dr Chennappan - Consultant Physician &
          Neurologist, Krishnagiri
        </title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p className="text-2xl">Doctor</p>
        <p className="text-3xl font-bold lg:text-6xl">C Chennappan</p>
        <p>
          MD (Gen. Med.), PGI-Chandigarh, DM (Neuro) Consultant Physician &
          Neurologist
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 py-16 lg:flex-row lg:px-36">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <Image src={assets.DrChennappan} alt="Dr.Chennappan" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Dr C Chennappan</h2>
            <p className="text-sky-900">Neurologist</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3 text-sky-900">
          <h2 className="text-4xl font-bold ">About</h2>
          <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
          <p>
            Dr. C. Chennappan is a consultant Neurologist, practicing in
            Krishnagiri. He has an experience of 21 years in the medical field.
            He has a vast experience in diagnosing and treating various
            neurological conditions. He practices at Sri Poongavin Medical
            center, Krishnagiri.
          </p>
          <p>
            He had completed MBBS from Madras Medical College, Chennai in 2002,
            MD - General Medicine from PGIMER Chandigarh in 2008 and DM -
            Neurology from Madras Medical college, Chennai in 2014. He is a
            member of Indian Medical Association, Indian Academy of Neurology,
            Indian Epilepsy Society and Indian epilepsy assocation
          </p>
          <p>
            He also got his training in NIMHANS for Neuropathology and
            Electrophysiology in Sree Chitra Tirunal Institute for Medical
            Sciences & Technology
          </p>
          <Link
            href={`tel:${bookingPhone}`}
            className="p-3 px-6 mt-4 text-xl text-center text-white bg-red-500 rounded-full lg:text-left lg:w-fit"
          >
            <div className="lg:inline">Book Appointment: </div>
            <div className="lg:inline">
              {bookingPhone.substring(0, 3) +
                " " +
                bookingPhone.substring(3, 7) +
                " " +
                bookingPhone.substring(7, 13)}
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-12 mb-12 lg:px-36 bg-sky-50">
        <h2 className="text-3xl font-bold text-sky-900 ">
          My Educational Qualifications
        </h2>
        <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
        <Education />
      </div>
      <div className="flex flex-col gap-4 px-6 py-2 mb-12 lg:py-16 lg:px-36">
        <h2 className="text-3xl font-bold text-sky-900 ">My Experience</h2>
        <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
        <Experience />
      </div>
    </div>
  );
}
