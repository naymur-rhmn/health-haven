import React from "react";
import Hero from "../components/Hero";
import Speacilities from "../components/Speacilities";
import Invoice from "../components/Invoice";
import Doctors from "../components/Doctors";
import ContactInfo from "../components/ContactInfo";
import Bookings from "../components/Bookings";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      <Hero />
      <Bookings />
      <AboutUs />
      {/* <Doctors /> */}
      <Speacilities />
      {/* <Invoice /> */}
      {/* <ContactInfo /> */}
    </div>
  );
}

export default Home;
