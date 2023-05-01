import React from "react";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/solid";
import {
  Dementia,
  Diabetes,
  FacialPalsy,
  GeneralMedicine,
  Headache,
  Hypertension,
  Parkinson,
  Stroke,
  Vertigo,
} from "@/icons";

const departments = [
  {
    name: "General Medicine",
    icon: <GeneralMedicine className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Blood Pressure",
    icon: <Hypertension className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Diabetes",
    icon: <Diabetes className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Headache",
    icon: <Headache className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Stroke",
    icon: <Stroke className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Facial Palsy",
    icon: <FacialPalsy className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Vertigo",
    icon: <Vertigo className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Parkinson's Disease",
    icon: <Parkinson className="w-12 h-12 text-red-800" />,
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    name: "Dementia",
    icon: <Dementia className="w-12 h-12 text-red-800" />,
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
          className="flex flex-col items-start gap-2 px-6 py-4 bg-white rounded-lg"
        >
          <div className="flex flex-row items-center justify-start gap-4">
            {department.icon}
            <p className="text-xl font-semibold text-paleSky-700">
              {department.name}
            </p>
          </div>
          {/* <p className="text-sm text-paleSky-600">{department.description}</p> */}
        </div>
      ))}
    </div>
  );
}
