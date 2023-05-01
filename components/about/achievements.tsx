export default function Achievements() {
  return (
    <div className="flex flex-col gap-4 my-8 lg:my-24 lg:flex-row">
      <div className="lg:w-1/4">
        <h1 className="text-4xl font-bold text-paleSky-700">
          Our Doctors achievements
        </h1>
        <div className="hidden mt-4 border border-red-800 border-solid lg:w-1/3 lg:block border-y-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:w-3/4 lg:grid-cols-3">
        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/5.png" />
        </div>

        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/3.png" />
        </div>

        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/5.png" />
        </div>

        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/3.png" />
        </div>

        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/5.png" />
        </div>

        <div className="flex items-center justify-center p-6 bg-gray-200 rounded-sm">
          <img src="https://demo.themefisher.com/novena/images/about/3.png" />
        </div>
      </div>
    </div>
  );
}
