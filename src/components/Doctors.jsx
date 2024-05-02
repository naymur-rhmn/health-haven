import React from "react";
import SectionTitle from "./SectionTitle";
import Slider from "react-slick";
import Doctor from "./Doctor";

function Doctors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    cssEase: "ease-out",
    pauseOnHover: true,
  };

  const doctors = [
    {
      id: 1,
      name: "Abdullah",
      age: 38,
      speciality: "Urology",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/CB4syCp/doctor-3-min.jpg",
    },
    {
      id: 2,
      name: "Eldora",
      age: 33,
      speciality: "Neurology",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/KqMwtPx/doctor-01.png",
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
      image: "https://i.ibb.co/Srm1JBZ/doctor-6.png",
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
      image: "https://i.ibb.co/wLVBgRY/doctor-2-min.jpg",
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
      image: "https://i.ibb.co/y5Bzydp/doctor-4-min.jpg",
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
      image: "https://i.ibb.co/brkwVYh/doctor-5-min.jpg",
    },
    {
      id: 5,
      name: "Sefa al har",
      age: 40,
      speciality: "Bones",
      social: [
        { facebook: "wwww.facebook.com" },
        { twitter: "wwww.twitter.com" },
        { instagram: "wwww.instagram.com" },
      ],
      image: "https://i.ibb.co/HHBhn3L/doctor-7.png",
    },
  ];

  return (
    <section className="bg-white  py-8">
      <div className="container  max-w-screen-xl px-4 md:px-12 mx-auto">
        <div>
          <SectionTitle
            subTitle="Trusted Care"
            title="Our Doctors"
            customTextAlign="text-center"
          />
        </div>
        <div className="mt-8  md:mt-12 doctors">
          {/* react slick slider */}
          <Slider {...settings}>
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
