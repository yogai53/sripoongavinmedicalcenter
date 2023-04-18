import { ClockIcon } from "@heroicons/react/24/outline";
import Availability from "./availablity";

export default function Feature() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 lg:-mt-16 lg:flex-row text-sky-900 lg:px-36">
      <div className="flex flex-col gap-6 p-6 bg-white lg:w-1/3 drop-shadow-2xl rounded-xl">
        <ClockIcon className="w-16 h-16" aria-hidden="true" />
        <p className="font-light ">24 Hours Service</p>
        <p className="text-2xl font-bold ">Online Appoinment</p>
        <p className="">
          Get ALl time support for emergency.We have introduced the principle of
          family medicine.
        </p>
        <button className="p-3 mt-4 text-xl text-white rounded-full bg-sky-900 lg:w-2/3">
          Make appointment
        </button>
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
        <p className="text-2xl font-bold ">1-800-700-6200</p>
        <p className="">
          Get ALl time support for emergency.We have introduced the principle of
          family medicine.Get Conneted with us for any urgency .
        </p>
      </div>
    </div>
  );
}
