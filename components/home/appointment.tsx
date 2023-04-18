import React from "react";
import ContactPhone from "./contact-phone";
import ContactForm from "./contact-form";

export default function Appointment() {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="lg:w-1/3">
        <ContactPhone />
      </div>
      <div className="mt-12 mb-12 lg:w-2/3 lg:mt-0 lg:mb-0">
        <ContactForm />
      </div>
    </div>
  );
}
