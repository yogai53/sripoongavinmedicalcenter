import Head from "next/head";
import * as assets from "@/assets";
import Image from "next/image";
import { MetaTags } from "@/components/common";
import Link from "next/link";

const departments = [
  {
    title: "General Medicine",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.GeneralMedicine}
        alt="Diabetes"
      />
    ),
    description: "பொது மருத்துவம்",
  },
  {
    title: "Neurology",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Neurology}
        alt="Diabetes"
      />
    ),
    description: "நரம்பியல்",
  },
  // {
  //   title: "Cardiology",
  //   image: (
  //     <Image
  //       className="object-cover pointer-events-none group-hover:opacity-75"
  //       src={assets.Cardiology}
  //       alt="Diabetes"
  //     />
  //   ),
  //   description: "இதயவியல்",
  // },
];

export default function Departments() {
  return (
    <div>
      <MetaTags
        title="Shri Poongavin Medical Center, Krishnagiri - Departments"
        description="Best Neurologist and General Care"
        keywords="Best Neurologist, Best Neurologist in Krishnagiri, General Medical Care in Krishnagiri"
        url="https://sripoongavinmedicalcentre.com"
        image="/logo.jpeg"
      />
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-paleSky-500 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>All Department</p>
        <p className="text-3xl font-bold lg:text-6xl">Care Department</p>
      </div>
      <div className="flex flex-col items-center gap-4 px-4 py-16 text-paleSky-700 lg:px-64">
        <h2 className="text-4xl font-bold ">Award winning patient care</h2>
        <div className="hidden w-1/6 border border-red-800 border-solid lg:block lg:w-1/12 border-y-4"></div>
        <p>
          <Link href="/doctors/chennappan" className="font-bold">
            Dr. Chennappan
          </Link>{" "}
          is committed to providing exceptional patient care, and we are proud
          to have received recognition for his efforts. Our award-winning
          patient care is a testament to his commitment to excellence and our
          focus on providing the highest level of care to our patients.
        </p>
        <p className="mt-4">
          We believe that every patient deserves compassionate and personalized
          care, and{" "}
          <Link href="/doctors/chennappan" className="font-bold">
            Dr. Chennappan
          </Link>{" "}
          works tirelessly to ensure that each patient receives the attention
          and care they need to achieve optimal health outcomes. Whether you are
          undergoing treatment for a chronic illness or recovering from a
          surgical procedure, you can trust that our patient care will provide
          you with the best possible care and support throughout your healthcare
          journey.
        </p>
      </div>
      <div className="grid gap-4 px-4 mb-12 lg:py-12 lg:mt-2 lg:grid-cols-3 lg:px-48">
        {departments.map((department) => (
          <div
            className="flex flex-col gap-4 rounded-md shadow-xl"
            key={department.title}
          >
            <div className="h-48 overflow-hidden rounded-md group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              {department.image}
            </div>
            <div className="px-8 py-4">
              <h2 className="text-2xl font-bold text-paleSky-700">
                {department.title}
              </h2>
              <p className="text-paleSky-700">{department.description}</p>
              <p className="mt-4 cursor-pointer text-paleSky-700">
                Learn more {">"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
