import {
  Achievements,
  Appointment,
  Awards,
  Body,
  Departments,
  Feature,
  Services,
  Testimonial,
} from "@/components/home";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <Body />
      <Feature />
      <Services />
      <div className="z-10 flex flex-col items-center lg:mt-12">
        <Achievements />
      </div>

      <div className="z-0 flex flex-col gap-16 pb-24 -mt-24 pt-36 bg-sky-50">
        <div className="lg:mx-24 lg:px-80">
          <Awards />
        </div>
        <div className="mx-2 lg:mx-24 lg:px-12">
          <Departments />
        </div>
      </div>

      <div className="px-4 lg:px-36 lg:py-24">
        <Appointment />
      </div>
      <div className="px-4 lg:px-36 lg:py-24 bg-sky-50">
        <Testimonial />
      </div>
    </div>
  );
}
