import { ContactForm } from "@/components/home";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <div className="flex flex-col gap-8 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Contact Us</p>
        <p className="text-6xl font-bold">Get In Touch</p>
      </div>
      <div className="flex flex-col items-stretch justify-center gap-4 px-2 py-4 lg:gap-12 lg:py-24 lg:flex-row lg:px-48">
        <div className="flex flex-col items-center gap-4 p-12 border-4 border-gray-200 border-solid lg:w-1/3">
          <PhoneIcon className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-sky-900">Call Us</p>
          <p className="text-sky-900">+97 987987987897</p>
        </div>
        <div className="flex flex-col items-center gap-4 p-12 border-4 border-gray-200 border-solid lg:w-1/3">
          <PhoneIcon className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-sky-900">Email Us</p>
          <p className="text-sky-900">contact@mail.com</p>
        </div>
        <div className="flex flex-col items-center gap-4 p-12 border-4 border-gray-200 border-solid lg:w-1/3">
          <PhoneIcon className="w-12 h-12 text-red-500" />
          <p className="text-2xl font-bold text-sky-900">Location</p>
          <p className="text-center text-sky-900">
            North Main Street,Brooklyn Australia
          </p>
        </div>
      </div>
      <div className="px-2 lg:py-24 lg:px-48">
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.862030556422!2d78.21731387557628!3d12.525297787750596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac358e55d03359%3A0x3d66419726f8b4e4!2sgovt%20hospital%20krishnagiri!5e0!3m2!1sen!2sdk!4v1681835953164!5m2!1sen!2sdk"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full my-16 h-96"
      ></iframe>
    </div>
  );
}
