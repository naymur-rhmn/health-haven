import React from "react";
import SectionTitle from "./SectionTitle";
import ContactCard from "./ContactCard";

function ContactInfo() {
  return (
    <div className="bg-white py-8">
      <div className="container  max-w-screen-xl px-4 md:px-12 mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <SectionTitle subTitle="get in touch" title="contact" />
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5`}>
          <ContactCard
            icon=""
            title="emergency"
            text1="+990-582-45685"
            text2="+990-582-45685"
          />
          <ContactCard
            icon=""
            title="location"
            text1="5/12 nordem road"
            text2="lorem lorem lorem"
          />
          <ContactCard
            icon=""
            title="email"
            text1="dummy@mail.com"
            text2="email@mail.com"
          />
          <ContactCard
            icon=""
            title="Working hours"
            text1="Sun-Fri 24hours"
            text2="Saturday emergency only"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
