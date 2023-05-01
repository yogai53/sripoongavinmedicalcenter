import { MMC, PGIMR } from "@/assets/education";
import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid gap-4 lg:mt-6 lg:grid-cols-2">
        <div className="flex items-center gap-4">
          <Image src={MMC} alt="Appollo" className="w-24" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">MBBS - 2002</p>
            <p className="text-xl font-semibold text-paleSky-700">
              Madras Medical College, Chennai
            </p>
            {/* <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            doloremque harum, mollitia, soluta maxime porro veritatis fuga autem
            impedit corrupti aperiam sint, architecto, error nesciunt
            temporibus! Vel quod, dolor aliquam!
          </p> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image src={PGIMR} alt="Appollo" className="w-24" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">MD - 2008</p>
            <p className="text-xl font-semibold text-paleSky-700">
              General Medicine, PGI - Chandigarh
            </p>
            {/* <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            doloremque harum, mollitia, soluta maxime porro veritatis fuga autem
            impedit corrupti aperiam sint, architecto, error nesciunt
            temporibus! Vel quod, dolor aliquam!
          </p> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image src={MMC} alt="Appollo" className="w-24" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">DM - 2014</p>
            <p className="text-xl font-semibold text-paleSky-700">
              Neuro, Madras Medical College, Chennai
            </p>
            {/* <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            doloremque harum, mollitia, soluta maxime porro veritatis fuga autem
            impedit corrupti aperiam sint, architecto, error nesciunt
            temporibus! Vel quod, dolor aliquam!
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
