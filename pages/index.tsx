import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sri Poongavin Medical Center</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen p-10 bg-slate-50">
        <h3 className="mt-10 text-3xl text-slate-800">
          Sri Poongavin Medical Center
        </h3>
        <div className="flex flex-col items-center mt-10 border-solid text-slate-600">
          <div>
            <span className="text-xl">Dr. C.Chennappan</span>,
            MD(Gen.Med,PGI-Chandigar),DM(Neuro)
          </div>
          <p className="underline">
            Consultant Physician And Neurologist Krishnagiri
          </p>
        </div>
        <div className="text-4xl mt-44 text-slate-500">
          Website Launching Soon
        </div>
      </main>
    </>
  );
}
