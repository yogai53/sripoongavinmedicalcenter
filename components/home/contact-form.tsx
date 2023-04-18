export default function ContactForm() {
  return (
    <div className="flex flex-col gap-4 lg:px-36 text-sky-900">
      <h1 className="text-5xl font-bold text-sky-900">Book appoinment</h1>
      <p className="">
        Mollitia dicta commodi est recusandae iste, natus eum asperiores
        corrupti qui velit . Iste dolorum atque similique praesentium soluta.
      </p>
      <form className="mt-5">
        <div>
          <label
            htmlFor="Name"
            className="block text-sm font-medium leading-6 "
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="name"
              name="name"
              id="name"
              className="block w-full p-3 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:sky-900 sm:text-sm sm:leading-6"
              placeholder="Alex"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 "
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full p-3 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:sky-900 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 "
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              name="message"
              id="message"
              className="block w-full p-3 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:sky-900 sm:text-sm sm:leading-6"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="float-right mt-4">
          <button className="p-4 px-12 text-white rounded-2xl bg-sky-900">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
