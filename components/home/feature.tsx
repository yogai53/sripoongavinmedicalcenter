import { ClockIcon } from "@heroicons/react/24/outline";
import Availability from "./availablity";
import { bookingPhone, emergencyPhone } from "@/constants/hospital";
import Link from "next/link";
import { Clock, Support, Surgeon } from "@/icons";

export default function Feature() {
  return (
    <div className="flex flex-col gap-4 px-4 py-12 lg:-mt-16 lg:flex-row text-paleSky-700 lg:px-36">
      <div className="flex flex-col items-center gap-6 p-6 bg-white lg:items-start lg:w-1/3 drop-shadow-2xl rounded-xl">
        <Surgeon className=" w-14 h-14 text-paleSky-700" />
        <p className="font-light ">24 Hours Service</p>
        <p className="text-2xl font-bold ">Online Appoinment</p>
        <p className="">
          Booking your appointment by phone is quick and easy, and our staff can
          answer any questions you may have about the appointment process, our
          healthcare providers, or any other concerns you may have.
        </p>
        <Link
          href={`tel:${bookingPhone}`}
          className="px-6 py-3 mt-4 text-xl text-left text-white rounded-full bg-paleSky-500 hover:bg-paleSky-700 active:bg-paleSky-900 lg:w-fit"
        >
          Call:{" "}
          {bookingPhone.substring(0, 3) +
            " " +
            bookingPhone.substring(3, 7) +
            " " +
            bookingPhone.substring(7, 13)}
        </Link>
      </div>
      <div className="flex flex-col items-center gap-6 p-6 bg-white lg:items-start lg:w-1/3 drop-shadow-2xl rounded-xl">
        <Clock className=" w-14 h-14 text-paleSky-700" />
        <p className="font-light ">Timing schedule</p>
        <p className="text-2xl font-bold ">Working Hours</p>
        <Availability />
      </div>
      <div className="flex flex-col items-center gap-6 p-6 bg-white lg:items-start lg:w-1/3 drop-shadow-2xl rounded-xl">
        <Support className=" w-14 h-14 text-paleSky-700" />
        <p className="font-light ">Emegency Cases</p>
        <Link href={`tel:${emergencyPhone}`}>
          <p className="text-2xl font-bold text-red-800">
            {emergencyPhone.substring(0, 3) +
              " " +
              emergencyPhone.substring(3, 7) +
              " " +
              emergencyPhone.substring(7, 13)}
          </p>
        </Link>
        <p className="">
          In case of a medical emergency, it is important to seek medical
          attention as soon as possible. At our hospital, we have a dedicated
          emergency line that you can call at any time of the day or night.
        </p>
      </div>
    </div>
  );
}
