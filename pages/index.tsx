import Head from "next/head";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Sri Poongavin Medical Center</title>
      </Head>
      <main className="min-h-screen bg-slate-50 bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="absolute flex flex-col items-center w-full h-full p-2 md:p-10">
          <h3 className="mt-10 text-5xl text-slate-100">
            Sri Poongavin Medical Center
          </h3>
          <div className="flex flex-col items-center mt-10 border-solid text-slate-200">
            <div>
              <span className="text-2xl">Dr. C.Chennappan</span>,
              MD(Gen.Med,PGI-Chandigar),DM(Neuro)
            </div>
            <p className="mt-5 text-xl underline">
              Consultant Physician And Neurologist Krishnagiri
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 mt-10 text-4xl md:mt-48 text-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>

            <p>Website Launching Soon</p>
          </div>
        </div>
      </main>
    </div>
  );
}
