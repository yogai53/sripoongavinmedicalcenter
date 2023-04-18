import React from "react";

export default function Body() {
  return (
    <div className="px-4 py-4 lg:py-24 lg:bg-[url('https://demo.themefisher.com/novena/images/bg/slider-bg-1.jpg')] lg:px-36">
      <div className="flex flex-col lg:w-6/12 gap-y-5 ">
        <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
        <p className="text-lg font-light text-sky-700">
          TOTAL HEALTH CARE SOLUTION
        </p>
        <h2 className="font-semibold text-7xl text-sky-900">
          Your Most Trusted Partner
        </h2>
        <p className="font-normal text-sky-700">
          A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
          quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <button className="p-3 mt-4 text-xl text-white bg-red-500 rounded-full lg:w-1/2">
          Make appointment
        </button>
      </div>
    </div>
  );
}
