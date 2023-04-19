import React from "react";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/solid";

const departments = [
  {
    name: "General Medicine",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Blood Pressure",
    icon: <HeartIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Diabetes",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Headache",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Stroke",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Facial Palsy",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Vertigo",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Parkinson's Disease",
    icon: <BeakerIcon className="w-12 h-12 text-red-600" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Dementia",
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
