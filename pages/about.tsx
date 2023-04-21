import {
  Achievements,
  Declaration,
  Doctors,
  Services,
} from "@/components/about";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <div className="flex flex-col gap-8 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>About Us</p>
        <p className="text-6xl font-bold">About us</p>
      </div>
      <div className="p-4 lg:mx-48">
        <Declaration />
        <Services />
        <Achievements />
        <Doctors />
      </div>
    </div>
  );
}
