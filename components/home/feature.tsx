import { ClockIcon } from "@heroicons/react/24/outline";
import Availability from "./availablity";
import { bookingPhone, emergencyPhone } from "@/constants/hospital";
import Link from "next/link";

export default function Feature() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 lg:-mt-16 lg:flex-row text-sky-900 lg:px-36">
      <div className="flex flex-col gap-6 p-6 bg-white lg:w-1/3 drop-shadow-2xl rounded-xl">
        <ClockIcon className="w-16 h-16" aria-hidden="true" />
        <p className="font-light ">24 Hours Service</p>
        <p className="text-2xl font-bold ">Online Appoinment</p>
        <p className="">
          Get All time support for emergency. We have introduced the principle
          of family medicine.
        </p>
        <Link
          href={`tel:${bookingPhone}`}
          className="px-6 py-3 mt-4 text-xl text-left text-white rounded-full bg-sky-900 lg:w-fit"
        >
          Call:{" "}
          {bookingPhone.substring(0, 3) +
            " " +
            bookingPhone.substring(3, 7) +
            " " +
            bookingPhone.substring(7, 13)}
        </Link>
      </div>
      <div className="flex flex-col gap-6 p-6 bg-white lg:w-1/3 drop-shadow-2xl rounded-xl">
        <ClockIcon className="w-16 h-16" aria-hidden="true" />
        <p className="font-light ">Timing schedule</p>
        <p className="text-2xl font-bold ">Working Hours</p>
        <Availability />
      </div>
      <div className="flex flex-col gap-6 p-6 bg-white lg:w-1/3 drop-shadow-2xl rounded-xl">
        <ClockIcon className="w-16 h-16" aria-hidden="true" />
        <p className="font-light ">Emegency Cases</p>
        <Link href={`tel:${emergencyPhone}`}>
          <p className="text-2xl font-bold ">
            {emergencyPhone.substring(0, 3) +
              " " +
              emergencyPhone.substring(3, 7) +
              " " +
              emergencyPhone.substring(7, 13)}
          </p>
        </Link>
        <p className="">
          Get All time support for emergency. We have introduced the principle
          of family medicine. Get Conneted with us for any urgency.
        </p>
      </div>
    </div>
  );
}
