import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-black text-white relative z-50 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center  h-[35px]">
        {/* social icons */}
        <div className="flex gap-3">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        {/*  */}
        <div>
          {/* email */}
          <div className="flex flex-row items-center gap-1">
            <FaEnvelope />
            <a href="mailto:naymurmn@email.com">naymurmn@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
