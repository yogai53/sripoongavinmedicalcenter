import React from "react";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/solid";

const departments = [
  {
    name: "Laboratory services",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Heart Disease",
    icon: <HeartIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Dental Care",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Body Surgery",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Neurology Surgery",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Gynaecology",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
];

export default function Departments() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {departments.map((department) => (
        <div
          key={department.name}
          className="flex flex-col items-center gap-6 px-6 py-12 bg-white rounded-lg"
        >
          <div className="flex flex-row items-center justify-start gap-4">
            {department.icon}
            <p className="text-xl font-semibold">{department.name}</p>
          </div>
          <p className="text-sm">{department.description}</p>
        </div>
      ))}
    </div>
  );
}
