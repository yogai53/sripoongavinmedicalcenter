import { MetaTags } from "@/components/common";
import { ContactForm } from "@/components/home";
import {
  bookingPhone,
  emergencyPhone,
  hospitalEmail,
  hospitalFullAddress,
  hospitalLocation,
  hospitalName,
} from "@/constants/hospital";
import { AppointmentCall, Email, EmergencyCall, Location } from "@/icons";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MetaTags
        title="Shri Poongavin Medical Center, Krishnagiri - Contact Us"
        description="Best Neurologist and General Care"
        keywords="Best Neurologist, Best Neurologist in Krishnagiri, General Medical Care in Krishnagiri"
        url="https://sripoongavinmedicalcentre.com"
        image="/logo.jpeg"
      />
      <div className="flex flex-col gap-8 items-center text-center py-12 lg:py-36 text-white bg-paleSky-500 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Contact Us</p>
        <p className="text-6xl font-bold">Get In Touch</p>
      </div>
      <div className="flex flex-col items-stretch justify-center gap-2 px-2 py-4 lg:gap-4 lg:py-12 lg:flex-row lg:px-48">
        <Link
          href={`tel:${emergencyPhone}`}
          className="flex flex-col items-center gap-4 p-6 border-2 border-solid border-paleSky-300 lg:w-1/3 hover:bg-paleSky-20"
        >
          <EmergencyCall className="w-12 h-12 text-red-800" />
          <p className="text-2xl font-bold text-center text-paleSky-700">
            Emergency
          </p>

          <p className="text-paleSky-700">
            {emergencyPhone.substring(0, 3) +
              " " +
              emergencyPhone.substring(3, 7) +
              " " +
              emergencyPhone.substring(7, 13)}
          </p>
        </Link>
        <Link
          href={`tel:${bookingPhone}`}
          className="flex flex-col items-center gap-4 p-6 border-2 border-solid border-paleSky-300 hover:bg-paleSky-20 lg:w-1/3"
        >
          <AppointmentCall className="w-12 h-12 text-red-800" />
          <p className="text-2xl font-bold text-center text-paleSky-700">
            Appointment
          </p>

          <p className="text-paleSky-700">
            {bookingPhone.substring(0, 3) +
              " " +
              bookingPhone.substring(3, 7) +
              " " +
              bookingPhone.substring(7, 13)}
          </p>
        </Link>
        <Link
          href={`mailto:${hospitalEmail}Enquiry to ${hospitalName}`}
          className="flex flex-col items-center gap-4 p-6 border-2 border-solid border-paleSky-300 hover:bg-paleSky-20 lg:w-1/3"
        >
          <Email className="w-12 h-12 text-red-800" />
          <p className="text-2xl font-bold text-center text-paleSky-700">
            Email Us
          </p>
          <p className="text-paleSky-700">{hospitalEmail}</p>
        </Link>
        <Link
          href={hospitalLocation}
          target="_blank"
          className="flex flex-col items-center gap-4 p-6 border-2 border-solid border-paleSky-300 hover:bg-paleSky-20 lg:w-1/3"
        >
          <Location className="w-12 h-12 text-red-800" />
          <p className="text-2xl font-bold text-center text-paleSky-700">
            Location
          </p>
          <p className="text-center text-paleSky-700">{hospitalFullAddress}</p>
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3894.8164309840076!2d78.20214061481737!3d12.528316891147798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMxJzQxLjkiTiA3OMKwMTInMTUuNiJF!5e0!3m2!1sen!2sdk!4v1682684332359!5m2!1sen!2sdk"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[500px] my-16"
      ></iframe>
      <div className="px-2 mb-12 lg:py-6 lg:px-48 h-[972px]">
        <ContactForm />
      </div>
    </div>
  );
}
