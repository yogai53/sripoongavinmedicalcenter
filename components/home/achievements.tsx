import React from "react";

export default function Achievements() {
  return (
    <div className="flex flex-col justify-between w-full gap-12 p-12 text-white rounded-sm lg:gap-24 lg:w-auto lg:mx-24 bg-sky-900 lg:flex-row">
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-row items-center gap-2">
          <h1 className="font-bold text-7xl ">48</h1>
          <span>k</span>
        </div>
        <p>Happy Patients</p>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-row items-center gap-2">
          <h1 className="font-bold text-7xl">10</h1>
          <span>+</span>
        </div>
        <p>Departments</p>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-row items-center gap-2">
          <h1 className="font-bold text-7xl">20</h1>
          <span>+</span>
        </div>
        <p>Services</p>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-row items-center gap-2">
          <h1 className="font-bold text-7xl">20</h1>
        </div>
        <p>Staffs</p>
      </div>
    </div>
  );
}
