import Head from "next/head";
import Image from "next/image";
import * as assets from "@/assets";

const services = [
  {
    title: "General Medicine",
    description: "பொது மருத்துவம்",
    image: <Image src={assets.GeneralMedicine} alt="Diabetes" />,
  },
  {
    title: "Blood Pressure",
    description: "இரத்த கொதிப்பு",
    image: <Image src={assets.BloodPressure} alt="Diabetes" />,
  },
  {
    title: "Diabetes",
    description: "சர்க்கரை நோய்",
    image: <Image src={assets.Diabetes} alt="Diabetes" />,
  },
  {
    title: "Headache",
    description: "தலைவலி",
    image: <Image src={assets.Headache} alt="Diabetes" />,
  },
  {
    title: "Stroke",
    description: "பக்கவாதம்",
    image: <Image src={assets.Stroke} alt="Diabetes" />,
  },
  {
    title: "Facial Palsy",
    description: "முகவாதம்",
    image: <Image src={assets.FacialPalsy} alt="Diabetes" />,
  },
  {
    title: "Vertigo",
    description: "தலைசுற்றல்",
    image: <Image src={assets.Vertigo} alt="Diabetes" />,
  },
  {
    title: "Neck and Back Pain",
    description: "கழுத்து மற்றும் முதுகு தண்டுவட இடுப்பு வலி",
    image: <Image src={assets.NeckPain} alt="Diabetes" />,
  },
  {
    title: "Parkinson's Disease",
    description: "நடுக்குவாதம்",
    image: <Image src={assets.Parkinson} alt="Diabetes" />,
  },
  {
    title: "Numbness",
    description: "மதமதப்பு",
    image: <Image src={assets.Diabetes} alt="Diabetes" />,
  },
  {
    title: "Neural Pain",
    description: "நரம்பு வலி",
    image: <Image src={assets.Numbness} alt="Diabetes" />,
  },
  {
    title: "Dementia",
    description: "ஞாபகசக்தி குறைதல்",
    image: <Image src={assets.Dementia} alt="Diabetes" />,
  },
  {
    title: "Tremor",
    description: "கை, கால், தலை நடுக்கம்",
    image: <Image src={assets.Tremor} alt="Diabetes" />,
  },
  {
    title: "Insomnia",
    description: "நரம்பு தளர்ச்சி, தூக்கமின்மை",
    image: <Image src={assets.Insomnia} alt="Diabetes" />,
  },
];

export default function Services() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Our services</p>
        <p className="text-3xl font-bold lg:text-6xl">What We Do</p>
      </div>
      <div className="grid gap-4 py-12 lg:mt-12 lg:grid-cols-3 lg:px-48">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-4 p-12 shadow-xl"
          >
            <div className="h-48 overflow-hidden">{service.image}</div>

            <div>
              <h2 className="text-2xl font-bold text-sky-900">
                {service.title}
              </h2>
              <p className="text-xl text-sky-900">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
