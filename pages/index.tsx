import Head from "next/head";
import { Montserrat } from "next/font/google";
import {
  Achievements,
  Appointment,
  Awards,
  Body,
  Departments,
  Feature,
  Footer,
  Header1,
  Header2,
  Services,
  Testimonial,
} from "@/components/home";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Sri Poongavin Medical Center</title>
      </Head>
      <header>
        <Header1 />
        <Header2 />
      </header>
      <Body />
      <Feature />
      <Services />
      <div className="z-10 flex flex-col items-center mt-12">
        <Achievements />
      </div>

      <div className="z-0 flex flex-col gap-16 pb-24 -mt-24 pt-36 bg-sky-50">
        <div className="mx-24 lg:px-80">
          <Awards />
        </div>
        <div className="mx-24 lg:px-12">
          <Departments />
        </div>
      </div>

      <div className="px-4 lg:px-36 lg:py-24">
        <Appointment />
      </div>
      <div className="px-4 lg:px-36 lg:py-24 bg-sky-50">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
