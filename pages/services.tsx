import Head from "next/head";

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
      <div className="grid gap-4 py-12 mt-12 lg:grid-cols-3 lg:px-48">
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Child care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Personal Care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Personal Care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Personal Care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Personal Care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-4 p-12 shadow-xl">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Personal Care</h2>
            <p className="text-sky-900">
              Saepe nulla praesentium eaque omnis perferendis a doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
