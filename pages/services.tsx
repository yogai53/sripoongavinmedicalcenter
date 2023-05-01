import Head from "next/head";
import Image from "next/image";
import * as assets from "@/assets";
import { MetaTags } from "@/components/common";

const services = [
  {
    title: "General Medicine",
    description: "பொது மருத்துவம்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.GeneralMedicine}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Blood Pressure",
    description: "இரத்த கொதிப்பு",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.BloodPressure}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Diabetes",
    description: "சர்க்கரை நோய்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Diabetes}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Headache",
    description: "தலைவலி",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Headache}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Stroke",
    description: "பக்கவாதம்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Stroke}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Facial Palsy",
    description: "முகவாதம்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.FacialPalsy}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Vertigo",
    description: "தலைசுற்றல்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Vertigo}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Neck and Back Pain",
    description: "கழுத்து மற்றும் முதுகு தண்டுவட இடுப்பு வலி",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.NeckPain}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Parkinson's Disease",
    description: "நடுக்குவாதம்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Parkinson}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Numbness",
    description: "மதமதப்பு",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Diabetes}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Neural Pain",
    description: "நரம்பு வலி",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Numbness}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Dementia",
    description: "ஞாபகசக்தி குறைதல்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Dementia}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Tremor",
    description: "கை, கால், தலை நடுக்கம்",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Tremor}
        alt="Diabetes"
      />
    ),
  },
  {
    title: "Insomnia",
    description: "நரம்பு தளர்ச்சி, தூக்கமின்மை",
    image: (
      <Image
        className="object-cover pointer-events-none group-hover:opacity-75"
        src={assets.Insomnia}
        alt="Diabetes"
      />
    ),
  },
];

export default function Services() {
  return (
    <div>
      <MetaTags
        title="Shri Poongavin Medical Center, Krishnagiri - Services"
        description="Best Neurologist and General Care"
        keywords="Best Neurologist, Best Neurologist in Krishnagiri, General Medical Care in Krishnagiri"
        url="https://sripoongavinmedicalcentre.com"
        image="/logo.jpeg"
      />
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-paleSky-500 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Our services</p>
        <p className="text-3xl font-bold lg:text-6xl">What We Do</p>
      </div>
      <div className="px-4 py-12 lg:mt-12 lg:px-48">
        <ul
          role="list"
          className="grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {services.map((service) => (
            <li key={service.title} className="relative">
              <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {service.image}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for IMG_4985.HEIC
                  </span>
                </button>
              </div>
              <p className="block mt-2 text-xl font-bold truncate pointer-events-none text-paleSky-700">
                {service.title}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
