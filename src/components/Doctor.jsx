import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Doctor({ doctor }) {
  const { name, id, image, social, speciality } = doctor;
  return (
    <div className="">
      <img
        className="w-full h-[350px] rounded-t"
        src={image}
        alt={`${name} 'image'`}
      />

      <div className="bg-tone text-primary text-center py-3">
        <p className=" text-[15px]">{name}</p>
        <p className="font-bold  text-lg tracking-wider">{speciality}</p>
        <div className="flex justify-center mt-2">
          <div className="flex gap-2">
            <a href={social[0].facebook}>
              <FaFacebook />
            </a>
            <a href={social[0].instagram}>
              <FaInstagram />
            </a>
            <a href={social[0].twitter}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary py-2 text-center text-white text-sm tracking-wider rounded-b">
        View Profile
      </div>
    </div>
  );
}

export default Doctor;
