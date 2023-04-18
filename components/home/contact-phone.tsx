import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function ContactPhone() {
  return (
    <div className="relative">
      <img
        src="https://demo.themefisher.com/novena/images/about/img-3.jpg"
        className="hidden h-auto show lg:block"
      />
      <div className="p-6 text-5xl font-extrabold text-white lg:absolute lg:-right-24 lg:bottom-5 bg-sky-900">
        <div className="flex flex-row items-center justify-between gap-4">
          <PhoneIcon className="w-8 h-8" />
          <span>+23 23 12 43 12</span>
        </div>
      </div>
    </div>
  );
}
