import { bookingPhone } from "@/constants/hospital";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import * as assets from "@/assets";
import { Education, Experience } from "@/components/doctors/chennappan";
import { MetaTags } from "@/components/common";

export default function DoctorChennapan() {
  return (
    <div>
      <MetaTags
        title="Shri Poongavin Medical Center, Krishnagiri"
        description="Doctor Dr. C. Chennappan, MD (Gen. Med.), PGI-Chandigarh, DM (Neuro) Consultant Physician &
        Neurologist. Best Neurologist and General Care"
        keywords="Doctor Dr. C. Chennappan, MD (Gen. Med.), PGI-Chandigarh, DM (Neuro) Consultant Physician &
        Neurologist. Best Neurologist, Best Neurologist in Krishnagiri, General Medical Care in Krishnagiri"
        url="https://sripoongavinmedicalcentre.com"
        image="/logo.jpeg"
      />
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-paleSky-500 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p className="text-2xl">Doctor</p>
        <p className="text-3xl font-bold lg:text-6xl">C Chennappan</p>
        <p>
          MD (Gen. Med.), PGI-Chandigarh, DM (Neuro) Consultant Physician &
          Neurologist
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 py-16 lg:flex-row lg:px-36">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <Image
            src={assets.DrChennappan}
            alt="Dr.Chennappan"
            className="w-64 rounded-xl"
          />
          <div>
            <h2 className="text-2xl font-bold text-paleSky-700">
              Dr C Chennappan
            </h2>
            <p className="text-paleSky-700">
              Consultant Physician And Neurologist
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3 text-paleSky-700">
          <h2 className="text-4xl font-bold ">About</h2>
          <div className="w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4"></div>
          <p>
            Dr. C. Chennappan is a consultant Neurologist, practicing in
            Krishnagiri. He has an experience of 21 years in the medical field.
            He has vast experience in diagnosing and treating various
            neurological conditions. He practices at Shri Poongavin Medical
            Centre, Krishnagiri.
          </p>
          <p>
            He completed his MBBS from Madras Medical College, Chennai in 2002,
            MD - General Medicine from PGIMER Chandigarh in 2008, and DM -
            Neurology from Madras Medical College, Chennai in 2014. He is a
            member of the Indian Medical Association, Indian Academy of
            Neurology, Indian Epilepsy Society, and Indian Epilepsy Association.
          </p>
          <p>
            He also trained in NIMHANS for Neuropathology and Electrophysiology
            at Sree Chitra Tirunal Institute for Medical Sciences & Technology.
          </p>
          <Link
            href={`tel:${bookingPhone}`}
            className="p-3 px-6 mt-4 text-xl text-center text-white rounded-full bg-paleSky-500 hover:bg-paleSky-700 active:bg-paleSky-900 lg:text-left lg:w-fit"
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
      <div className="flex flex-col gap-4 px-6 py-12 mb-12 lg:px-36 bg-paleSky-50">
        <h2 className="text-3xl font-bold text-paleSky-700 ">
          My Educational Qualifications
        </h2>
        <div className="w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4"></div>
        <Education />
      </div>
      <div className="flex flex-col gap-4 px-6 py-2 mb-12 lg:py-16 lg:px-36">
        <h2 className="text-3xl font-bold text-paleSky-700 ">My Experience</h2>
        <div className="w-1/6 border border-red-800 border-solid lg:w-1/12 border-y-4"></div>
        <Experience />
      </div>
    </div>
  );
}
