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
      <Head>
        <title>Sri Poongavin Medical Center, Krishnagiri - Contact Us</title>
      </Head>
      <div className="flex flex-col gap-8 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Contact Us</p>
        <p className="text-6xl font-bold">Get In Touch</p>
      </div>
      <div className="flex flex-col items-stretch justify-center gap-2 px-2 py-4 lg:gap-4 lg:py-12 lg:flex-row lg:px-48">
        <Link
          href={`tel:${emergencyPhone}`}
          className="flex flex-col items-center gap-4 p-6 border-4 border-gray-200 border-solid lg:w-1/3"
        >
          <EmergencyCall className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-center text-sky-900">
            Emergency
          </p>

          <p className="text-sky-900">
            {emergencyPhone.substring(0, 3) +
              " " +
              emergencyPhone.substring(3, 7) +
              " " +
              emergencyPhone.substring(7, 13)}
          </p>
        </Link>
        <Link
          href={`tel:${bookingPhone}`}
          className="flex flex-col items-center gap-4 p-6 border-4 border-gray-200 border-solid lg:w-1/3"
        >
          <AppointmentCall className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-center text-sky-900">
            Appointment
          </p>

          <p className="text-sky-900">
            {bookingPhone.substring(0, 3) +
              " " +
              bookingPhone.substring(3, 7) +
              " " +
              bookingPhone.substring(7, 13)}
          </p>
        </Link>
        <Link
          href={`mailto:${hospitalEmail}Enquiry to ${hospitalName}`}
          className="flex flex-col items-center gap-4 p-6 border-4 border-gray-200 border-solid lg:w-1/3"
        >
          <Email className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-center text-sky-900">
            Email Us
          </p>
          <p className="text-sky-900">{hospitalEmail}</p>
        </Link>
        <Link
          href={hospitalLocation}
          target="_blank"
          className="flex flex-col items-center gap-4 p-6 border-4 border-gray-200 border-solid lg:w-1/3"
        >
          <Location className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-center text-sky-900">
            Location
          </p>
          <p className="text-center text-sky-900">{hospitalFullAddress}</p>
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.862030556422!2d78.21731387557628!3d12.525297787750596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac358e55d03359%3A0x3d66419726f8b4e4!2sgovt%20hospital%20krishnagiri!5e0!3m2!1sen!2sdk!4v1681835953164!5m2!1sen!2sdk"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[500px] my-16"
      ></iframe>
      <div className="px-2 mb-12 lg:py-6 lg:px-48">
        <ContactForm />
      </div>
    </div>
  );
}
