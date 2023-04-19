import Head from "next/head";
import * as assets from "@/assets";
import Image from "next/image";

const departments = [
  {
    title: "General Medicine",
    image: <Image src={assets.GeneralMedicine} alt="Diabetes" />,
    description: "பொது மருத்துவம்",
  },
  {
    title: "Neurology",
    image: <Image src={assets.Neurology} alt="Diabetes" />,
    description: "நரம்பியல்",
  },
  {
    title: "Cardiology",
    image: <Image src={assets.Cardiology} alt="Diabetes" />,
    description: "இதயவியல்",
  },
];

export default function Departments() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center</title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>All Department</p>
        <p className="text-3xl font-bold lg:text-6xl">Care Department</p>
      </div>
      <div className="flex flex-col items-center gap-4 py-16 text-sky-900 lg:px-64">
        <h2 className="text-4xl font-bold ">Award winning patient care</h2>
        <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore
          cumque voluptate beatae quis inventore sapiente nemo, a eligendi
          nostrum expedita veritatis neque incidunt ipsa doloribus provident ex,
          at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          asperiores voluptas?
        </p>
      </div>
      <div className="grid gap-4 py-12 mt-12 lg:grid-cols-3 lg:px-48">
        {departments.map((department) => (
          <div
            className="flex flex-col gap-4 rounded-md shadow-xl"
            key={department.title}
          >
            <div className="h-48 overflow-hidden rounded-md">
              {department.image}
            </div>
            <div className="px-8 py-4">
              <h2 className="text-2xl font-bold text-sky-900">
                {department.title}
              </h2>
              <p className="text-sky-900">{department.description}</p>
              <p className="mt-4 cursor-pointer text-sky-900">
                Learn more {">"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
