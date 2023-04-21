import Head from "next/head";
import Image from "next/image";
import * as assets from "@/assets/facilities";

const facilities = [
  {
    title: "Diabetes",
    image: (
      <Image
        src={assets.Diabetes}
        alt="Diabetes"
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
    ),
  },
  {
    title: "Blood Pressure",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.BloodPressure}
        alt="Blood Pressure"
      />
    ),
  },
  {
    title: "ECG",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Ecg}
        alt="Ecg"
      />
    ),
  },
  {
    title: "Physiotherapy",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Physiotherapy}
        alt="Physiotherapy"
      />
    ),
  },
  {
    title: "Pharmacy",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Pharmacy}
        alt="Pharmacy"
      />
    ),
  },
  {
    title: "NCS/EMG",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Emg}
        alt="EMG"
      />
    ),
  },
  {
    title: "Lab",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Lab}
        alt="Lab"
      />
    ),
  },
  {
    title: "EEG",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Eeg}
        alt="Eeg"
      />
    ),
  },
];

export default function Facilities() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Our facilities</p>
        <p className="text-3xl font-bold lg:text-6xl">What We Have</p>
      </div>
      <div className="px-12 py-12 lg:mt-12">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {facilities.map((facility) => (
            <li key={facility.title} className="relative">
              <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {facility.image}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for IMG_4985.HEIC
                  </span>
                </button>
              </div>
              <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                {facility.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
