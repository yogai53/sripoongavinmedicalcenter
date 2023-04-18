import Head from "next/head";

export default function DoctorChennapan() {
  return (
    <div>
      <Head>
        <title>Sri Poongavin Medical Center.</title>
      </Head>
      <div className="flex flex-col gap-2 items-center text-center py-12 lg:py-36 text-white bg-sky-950 bg-[url('https://demo.themefisher.com/novena/images/bg/22.jpg')] bg-blend-multiply">
        <p>Doctor</p>
        <p className="text-3xl font-bold lg:text-6xl">C Chennappan</p>
      </div>
      <div className="flex flex-col items-center gap-6 px-2 py-16 lg:flex-row lg:px-36">
        <div className="flex flex-col gap-4 lg:w-1/3">
          <img src="https://demo.themefisher.com/novena/images/team/1.jpg" />
          <div>
            <h2 className="text-2xl font-bold text-sky-900">Dr C Chennappan</h2>
            <p className="text-sky-900">Neurologist</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3 text-sky-900">
          <h2 className="text-4xl font-bold ">Introducing myself</h2>
          <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            tempore cumque voluptate beatae quis inventore sapiente nemo, a
            eligendi nostrum expedita veritatis neque incidunt ipsa doloribus
            provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius
            explicabo quidem? Officia accusamus repudiandae ea esse non
            reiciendis accusantium voluptates, facilis enim, corrupti eligendi?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            recusandae veritatis minus optio quod obcaecati laborum temporibus,
            deleniti vero perferendis molestias, ducimus facilis, sunt minima.
            Tempora, amet quasi asperiores voluptas?
          </p>
          <button className="p-3 mt-4 text-xl text-white bg-red-500 rounded-full lg:w-1/2">
            Make appointment
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-2 py-2 mb-12 lg:py-16 lg:px-36 bg-sky-50">
        <h2 className="text-3xl font-bold text-sky-900">
          My Educational Qualifications
        </h2>
        <div className="w-1/6 border border-red-500 border-solid lg:w-1/12 border-y-4"></div>
        <div className="grid gap-4 mt-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MBBS, M.D at University of Wyoming
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MBBS, M.D at University of Wyoming
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MBBS, M.D at University of Wyoming
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">Year(2005-2007)</p>
            <p className="text-2xl font-bold text-sky-900">
              MBBS, M.D at University of Wyoming
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              doloremque harum, mollitia, soluta maxime porro veritatis fuga
              autem impedit corrupti aperiam sint, architecto, error nesciunt
              temporibus! Vel quod, dolor aliquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
