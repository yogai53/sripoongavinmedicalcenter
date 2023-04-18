import React from "react";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    image: "https://demo.themefisher.com/novena/images/team/test-thumb1.jpg",
    name: "John Partho",
    heading: "Amazing Service",
    body: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    image: "https://demo.themefisher.com/novena/images/team/test-thumb1.jpg",
    name: "John Partho",
    heading: "Amazing Service",
    body: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    image: "https://demo.themefisher.com/novena/images/team/test-thumb1.jpg",
    name: "John Partho",
    heading: "Amazing Service",
    body: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
];

export default function Testimonial() {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 p-12 text-center lg:px-64">
        <h1 className="text-5xl font-bold text-sky-900">
          We served over 5000+ Patients
        </h1>
        <div className="w-1/12 border border-red-500 border-solid border-y-4"></div>
        <p className="text-sky-900">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque
          quaerat.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-12 lg:flex-row">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col gap-6 p-6 bg-white"
          >
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://demo.themefisher.com/novena/images/team/test-thumb1.jpg"
                className="w-24 h-24 border-4 border-gray-200 rounded-full borde-solid"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl text-sky-900">Amazing Service</h3>
                <span className="text-sky-900">John Partho</span>
              </div>
            </div>
            <p className="text-sky-900">
              They provide great service facilty consectetur adipisicing elit.
              Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
              adipisci suscipit fugit placeat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
