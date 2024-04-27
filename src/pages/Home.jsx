import React from "react";
import Hero from "../components/Hero";
import Speacilities from "../components/Speacilities";
import Invoice from "../components/Invoice";
import Doctors from "../components/Doctors";
import ContactInfo from "../components/ContactInfo";

function Home() {
  return (
    <>
      <Hero />
      <Invoice />
      <Doctors />
      <Speacilities />
      <ContactInfo />
    </>
  );
}

export default Home;
