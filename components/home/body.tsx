import { bookingPhone } from "@/constants/hospital";
import Link from "next/link";
import React from "react";

export default function Body() {
  return (
    <div className="px-4 py-4 lg:py-24 lg:bg-[url('https://demo.themefisher.com/novena/images/bg/slider-bg-1.jpg')] lg:px-36">
      <div className="flex flex-col lg:w-6/12 gap-y-5 ">
        <div className="hidden w-1/6 border border-red-500 border-solid lg:block lg:w-1/12 border-y-4"></div>
        <p className="text-lg font-bold lg:font-light text-sky-700">
          TOTAL HEALTH CARE SOLUTION
        </p>
        <h2 className="font-semibold text-7xl text-sky-900">
          Your Most Trusted Healthcare
        </h2>
        <p className="font-normal text-sky-700">
          A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
          quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <Link
          href={`tel:${bookingPhone}`}
          className="px-12 py-4 mt-4 text-xl text-center text-white bg-red-500 rounded-full lg:text-left lg:w-fit"
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
  );
}
