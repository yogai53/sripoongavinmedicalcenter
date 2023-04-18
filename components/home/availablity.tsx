const timings = [
  {
    name: "Sun - Wed :",
    time: "8:00 - 17:00",
  },
  {
    name: "Thu - Fri :",
    time: "9:00 - 17:00",
  },
  {
    name: "Sat - sun :",
    time: "10:00 - 17:00",
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
                  <p className="text-sm font-medium text-gray-900 truncate">
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
