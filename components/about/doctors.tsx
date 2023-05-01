import * as assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Doctors() {
  return (
    <div className="my-8 lg:my-24">
      <div className="flex flex-col gap-6 lg:items-center lg:px-64 lg:text-center">
        <h1 className="text-4xl font-bold text-paleSky-700">
          Meet Our Specialist
        </h1>
        <div className="hidden mt-4 border border-red-800 border-solid lg:w-1/12 lg:block border-y-4"></div>
        {/* <p className="text-gray">
          Experience excellence in healthcare: Get to know our specialist doctor
          Dr. Chennappan.
        </p> */}
      </div>

      <div className="flex items-center justify-center mt-12">
        <Link
          href="/doctors/chennappan"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src={assets.DrChennappan}
            alt="Dr.Chennappan"
            className="w-64 rounded-xl"
          />
          <div className="text-center">
            <p className="text-xl font-bold text-paleSky-700">Dr Chennappan</p>
            <p className="text-gray-400">General Medicine & Neurologist.</p>
          </div>
        </Link>
        {/* <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/2.jpg" />
          <div>
            <p className="text-xl font-bold text-paleSky-700">Dr Divya</p>
            <p className="text-gray-400">Gynaecologist.</p>
          </div>
        </Link>
        <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/3.jpg" />
          <div>
            <p className="text-xl font-bold text-paleSky-700">Dr Sathya</p>
            <p className="text-gray-400">General Physician.</p>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
