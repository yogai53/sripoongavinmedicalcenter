import Link from "next/link";

export default function Doctors() {
  return (
    <div className="my-8 lg:my-24">
      <div className="flex flex-col gap-6 lg:items-center lg:px-64 lg:text-center">
        <h1 className="text-4xl font-bold text-sky-900">Meet Our Specialist</h1>
        <div className="hidden mt-4 border border-red-500 border-solid lg:w-1/12 lg:block border-y-4"></div>
        <p className="text-gray">
          Today’s users expect effortless experiences. Don’t let essential
          people and processes stay stuck in the past. Speed it up, skip the
          hassles
        </p>
      </div>
      <div className="grid gap-8 mt-12 lg:grid-cols-4">
        <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <p className="text-xl font-bold text-sky-900">Dr Chennappan</p>
            <p className="text-gray-400">Neurologist.</p>
          </div>
        </Link>
        <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/2.jpg" />
          <div>
            <p className="text-xl font-bold text-sky-900">Dr Divya</p>
            <p className="text-gray-400">Gynaecologist.</p>
          </div>
        </Link>
        <Link href="/doctors/chennappan" className="flex flex-col gap-2">
          <img src="https://demo.themefisher.com/novena/images/team/3.jpg" />
          <div>
            <p className="text-xl font-bold text-sky-900">Dr Sathya</p>
            <p className="text-gray-400">General Physician.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
