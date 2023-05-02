import { bookingPhone } from "@/constants/hospital";
import Link from "next/link";
import React, { useId } from "react";
import AppStoreLink from "./body";
import { PhoneFrame } from "./body/PhoneFrame";
import Image from "next/image";
import { Logo } from "@/assets";

export default function Body() {
  return (
    <div className="px-4 py-4 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 lg:py-12 lg:px-36">
      <div className="relative z-10 max-w-2xl mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
        <div className="flex flex-col mt-4 lg:mt-12 gap-y-5">
          <div className="hidden w-1/6 border border-red-800 border-solid lg:block lg:w-1/12 border-y-4"></div>
          <p className="text-lg font-bold lg:font-light text-paleSky-700">
            TOTAL HEALTH CARE SOLUTION
          </p>
          <h2 className="text-5xl font-semibold lg:text-7xl text-paleSky-700">
            Your Most Trusted Healthcare
          </h2>
          <p className="font-normal text-paleSky-700">
            Providing Comprehensive and Compassionate Care: Your Health and
            Well-being is Our Top Priority
          </p>
          <Link
            href={`tel:${bookingPhone}`}
            className="px-12 py-4 mt-4 text-xl text-center text-white rounded-full bg-paleSky-500 hover:bg-paleSky-700 active:bg-paleSky-900 lg:text-left lg:w-fit"
          >
            Book Appointment:{" "}
            {bookingPhone.substring(0, 3) +
              " " +
              bookingPhone.substring(3, 7) +
              " " +
              bookingPhone.substring(7, 13)}
          </Link>
        </div>
      </div>
      <div className="relative hidden mt-10 lg:block sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
        <BackgroundIllustration className=" absolute left-1/2 top-4 h-[900px] w-[900px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
        <div className="flex -mx-4 h-[50px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-[100px] lg:h-auto lg:px-10 lg:pt-10 xl:-bottom-32 lg:mx-24">
          <Image src={Logo} alt="Logo" className="object-none rounded-full" />
        </div>
      </div>
    </div>
  );
}

function BackgroundIllustration(props: any) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
