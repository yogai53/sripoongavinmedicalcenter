import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Entrance, Lab, Reception, ReceptionTable } from "@/assets/hospital";
export default function Services() {
  return (
    <div className="flex flex-col justify-around gap-4 py-4 lg:mt-20 lg:flex-row text-paleSky-700 lg:px-36">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-2xl">
            <Image
              src={Entrance}
              alt="Entrance"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-2xl">
            <Image
              src={Lab}
              alt="Entrance"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-2xl">
            <Image
              src={ReceptionTable}
              alt="Entrance"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-2xl">
            <Image
              src={Reception}
              alt="Entrance"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 lg:w-1/3">
        <h2 className="text-5xl font-bold">Personal care & healthy living</h2>
        <p>
          We recognize the importance of communication and collaboration with
          patients and their families in the delivery of exceptional care. We
          are committed to working closely with our patients, their families,
          and the community to ensure that all patients receive the highest
          quality of care.
        </p>
        <Link
          href="/services"
          className="flex flex-row items-center justify-between p-3 px-6 mt-4 font-semibold text-white rounded-full bg-paleSky-500 text-md lg:w-1/2"
        >
          SERVICES
          <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
