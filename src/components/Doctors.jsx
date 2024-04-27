import React from "react";
import SectionTitle from "./SectionTitle";
import Slider from "react-slick";
import Doctor from "./Doctor";

function Doctors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const doctors = [
    {
      id: 1,
      name: "Eldora",
      age: 33,
      speciality: "Neurology",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/JH0nLTs/doctor-1-min.jpg",
    },
    {
      id: 2,
      name: "Abdullah",
      age: 38,
      speciality: "Urology",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/sC3mKpv/doctor-2-min.jpg",
    },
    {
      id: 3,
      name: "Andrew Rasel",
      age: 45,
      speciality: "CardioVasculer",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/2MhcH5S/doctor-3-min.jpg",
    },
    {
      id: 4,
      name: "Andrew Rasel",
      age: 44,
      speciality: "Dermatology",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/2MhcH5S/doctor-3-min.jpg",
    },
    {
      id: 5,
      name: "Andrew Rasel",
      age: 40,
      speciality: "Bones",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/sC3mKpv/doctor-2-min.jpg",
    },
  ];

  return (
    <section className="bg-white  py-8">
      <div className="container  max-w-screen-xl px-4 md:px-12 mx-auto">
        <div>
          <SectionTitle subTitle="Trusted Care" title="Our Doctors" />
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16">
          {/* react slider */}
          <Slider {...settings} className="overflow-hidden">
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
