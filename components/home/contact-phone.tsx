import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { emergencyPhone } from "@/constants/hospital";
import Link from "next/link";

export default function ContactPhone() {
  return (
    <div className="relative">
      <img
        src="https://demo.themefisher.com/novena/images/about/img-3.jpg"
        className="hidden h-auto show lg:block"
      />
      <div className="p-6 text-2xl font-extrabold text-white lg:text-5xl lg:absolute lg:-right-24 lg:bottom-5 bg-sky-900">
        <div className="flex flex-row items-center justify-between gap-4 text-center lg:text-left">
          <PhoneIcon className="w-8 h-8" />
          <Link href={`tel:${emergencyPhone}`}>
            <span>
              {emergencyPhone.substring(0, 3) +
                " " +
                emergencyPhone.substring(3, 7) +
                " " +
                emergencyPhone.substring(7, 13)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
