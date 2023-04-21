import { bookingPhone } from "@/constants/hospital";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import * as assets from "@/assets";

export default function DoctorChennapan() {
  return (
    <div>
      <Head>
        <title>
          Sri Poongavin Medical Center. Dr Chennappan - Consultant Physician &
          Neurologist, Krishnagiri
        </title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p className="text-2xl">Doctor</p>
        <p className="text-3xl font-bold lg:text-6xl">C Chennappan</p>
        <p>
          MD (Gen. Med.), PGI-Chandigarh, DM (Neuro) Consultant Physician &
          Neurologist
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 py-16 lg:flex-row lg:px-36">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <Image src={assets.DrChennappan} alt="Dr.Chennappan" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Dr C Chennappan</h2>
            <p className="text-sky-900">Neurologist</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3 text-sky-900">
          <h2 className="text-4xl font-bold ">Introducing myself</h2>
          <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            tempore cumque voluptate beatae quis inventore sapiente nemo, a
            eligendi nostrum expedita veritatis neque incidunt ipsa doloribus
            provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius
            explicabo quidem? Officia accusamus repudiandae ea esse non
            reiciendis accusantium
          </p>
          <Link
            href={`tel:${bookingPhone}`}
            className="p-3 px-6 mt-4 text-xl text-center text-white bg-red-500 rounded-full lg:text-left lg:w-fit"
          >
            <div className="lg:inline">Book Appointment: </div>
            <div className="lg:inline">
              {bookingPhone.substring(0, 3) +
                " " +
                bookingPhone.substring(3, 7) +
                " " +
                bookingPhone.substring(7, 13)}
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-2 mb-12 lg:py-16 lg:px-36 bg-sky-50">
        <h2 className="text-3xl font-bold text-center text-sky-900 lg:text-left">
          My Educational Qualifications
        </h2>
        <div className="hidden w-1/6 border border-red-500 border-solid lg:block lg:w-1/12 border-y-4"></div>
        <div className="grid gap-4 lg:mt-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MBBS at Madras Medical College, Chennai
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MD, General Medicine, PGI - Chandigarh
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              DM, Neuro, Madras Medical College, Chennai
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
