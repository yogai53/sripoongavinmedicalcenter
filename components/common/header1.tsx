import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <div className="flex gap-2 text-sm font-semibold leading-6">
          <PhoneIcon className="w-6 h-6" aria-hidden="true" />
          Call Now : 823-4565-13456
        </div>
      </div>
    </nav>
  );
}
