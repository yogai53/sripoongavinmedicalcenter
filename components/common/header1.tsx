import { emergencyPhone } from "@/constants/hospital";
import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Header1() {
  return (
    <nav
      className="flex justify-between p-4 text-white lg:py-4 lg:px-24 bg-sky-900"
      aria-label="Global"
    >
      <div className="flex flex-col w-full lg:px-8 lg:flex-row gap-y-2 lg:gap-x-12 lg:justify-between">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-4">
          <div className="flex gap-2 text-sm font-semibold leading-6">
            <AtSymbolIcon className="w-6 h-6" aria-hidden="true" />
            support@novena.com
          </div>
          <div className="flex gap-2 text-sm font-semibold leading-6">
            <MapPinIcon className="w-6 h-6" aria-hidden="true" />
            Address Ta-134/A, New York, USA
          </div>
        </div>

        <Link href={`tel:${emergencyPhone}`}>
          <div className="flex gap-2 text-sm font-semibold leading-6">
            <PhoneIcon className="w-6 h-6" aria-hidden="true" />
            Call Now :
            {emergencyPhone.substring(0, 3) +
              " " +
              emergencyPhone.substring(3, 7) +
              " " +
              emergencyPhone.substring(7, 13)}
          </div>
        </Link>
      </div>
    </nav>
  );
}
