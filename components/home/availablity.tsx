const timings = [
  {
    name: "Monday - Saturday :",
    time: "07:30AM - 07:30PM",
  },
  {
    name: "Sunday :",
    time: "Closed",
  },
];

export default function Availability() {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {timings.map((timing) => (
            <li key={timing.name} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-paleSky-700 truncate">
                    {timing.name}
                  </p>
                </div>
                <div>{timing.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
