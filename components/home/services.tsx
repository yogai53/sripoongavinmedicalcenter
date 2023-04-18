import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 mt-20 lg:flex-row text-sky-900 lg:px-36">
      <div className="flex flex-col items-center justify-center w-2/3 gap-4 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img
            src="https://demo.themefisher.com/novena/images/about/img-1.jpg"
            alt="Image 1"
            className="rounded-xl"
          />
          <img
            src="https://demo.themefisher.com/novena/images/about/img-2.jpg"
            alt="Image 2"
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://demo.themefisher.com/novena/images/about/img-3.jpg"
            alt="Image 3"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 lg:w-1/3">
        <h2 className="text-5xl font-bold">Personal care & healthy living</h2>
        <p>
          We provide best leading medicle service Nulla perferendis veniam
          deleniti ipsum officia dolores repellat laudantium obcaecati neque.
        </p>
        <button className="flex flex-row items-center justify-between p-3 px-6 mt-4 font-semibold text-white bg-red-500 rounded-full text-md lg:w-1/2">
          SERVICES
          <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
