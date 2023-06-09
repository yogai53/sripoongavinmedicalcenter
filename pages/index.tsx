import { MetaTags } from "@/components/common";
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

export default function Home() {
  return (
    <div>
      <MetaTags
        title="Shri Poongavin Medical Center, Krishnagiri"
        description="Best Neurologist and General Care"
        keywords="Best Neurologist, Best Neurologist in Krishnagiri, General Medical Care in Krishnagiri"
        url="https://sripoongavinmedicalcentre.com"
        image="/logo.jpeg"
      />

      <Body />
      <div className="bg-paleSky-20">
        <Feature />
      </div>

      <Services />
      {/* <div className="z-10 flex flex-col items-center lg:mt-12">
        <Achievements />
      </div> */}

      <div className="z-0 flex flex-col gap-6 pt-24 pb-24 bg-paleSky-20">
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
      {/* <div className="px-4 lg:px-36 lg:py-24 bg-paleSky-50">
        <Testimonial />
      </div> */}
    </div>
  );
}
