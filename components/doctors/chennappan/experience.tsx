import { hospitalName } from "@/constants/hospital";
import Image from "next/image";
import React from "react";
import { Appollo, Dmsch, Emirates, Pes } from "@/assets/experience";
import { Logo } from "@/assets";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row ">
      <div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2014
            </time>
            <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
              Consultant Neurologist (2014 - 2016)
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Apollo speciality Hospital, Trichy.
            </p>
            {/* <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-paleSky-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Learn more{" "}
        <svg
          className="w-3 h-3 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a> */}
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2016
            </time>
            <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
              Visiting Consultant Neurologist (2016 - 2017)
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              PES Hospital Kuppam
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2017
            </time>
            <div>
              <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
                Assistant & Associate Professor (2017 - 2023)
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Department of Neurology, DSMCH - Perambalur
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
                Visiting Consultant Neurologist (2017 - 2019)
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Apollo speciality Hospital, Trichy.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020
            </time>
            <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
              Specialist Neurologist (6 months)
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Emirates Healthcare, UAE, Dubai
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <h3 className="text-lg font-semibold text-paleSky-700 dark:text-white">
              Consultant Neurologist and General Practitioner
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {hospitalName}
            </p>
          </li>
        </ol>
      </div>

      <div className="flex flex-col gap-10 opacity-75">
        <div className="flex flex-col items-center justify-center gap-8 space-x-6 lg:flex-row lg:space-x-8 ">
          <div className="grid items-center justify-center flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="w-48 overflow-hidden rounded-lg lg:w-72">
              <Image src={Appollo} alt="Appollo" />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-12">
            <div className="w-48 overflow-hidden rounded-lg lg:w-72 ">
              {/* <Image src={Emirates} alt="Emirates" /> */}
            </div>
            <div className="w-48 overflow-hidden rounded-lg lg:w-72 ">
              <Image src={Pes} alt="Pes" />
            </div>
            <div className="w-48 overflow-hidden rounded-lg lg:w-72 ">
              <Image src={Dmsch} alt="Dmsch" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-6 lg:space-x-8 ">
          <div className="grid items-center justify-center flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg w-72">
              <Image src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
