import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Entrance, Lab, Reception } from "@/assets/hospital";
export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 lg:mt-20 lg:flex-row text-paleSky-700 lg:px-36">
      <div className="flex flex-col items-center justify-center w-2/3 gap-4 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover">
            <Image
              src={Entrance}
              alt="Entrance"
              className="max-w-xs transition duration-300 ease-in-out rounded-xl hover:scale-105"
            />
          </div>

          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover">
            <Image
              src={Reception}
              alt="Reception"
              className="max-w-xs transition duration-300 ease-in-out rounded-xl hover:scale-105"
            />
          </div>
        </div>
        <div>
          <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover">
            <Image
              src={Lab}
              alt="Lab"
              className="max-w-xs transition duration-300 ease-in-out rounded-xl hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 lg:w-1/3">
        <h2 className="text-5xl font-bold">Personal care & healthy living</h2>
        <p>
          We provide best leading medicle service Nulla perferendis veniam
          deleniti ipsum officia dolores repellat laudantium obcaecati neque.
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
