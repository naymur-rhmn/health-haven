import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary py-4 md:py-6 sm:px-4 md:px-0 text-sm font-poppins">
      <div className=" ">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 ">
            <div>
              <a href="#">
                <h4 className="text-xl sm:text-3xl md:text-4xl font-yeseva md:mb-2">
                  Medical
                </h4>
              </a>
              <p className="font-light pr-2">
                Leading the Way in Medical <br /> Execelence, Trusted Care.
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-base md:text-lg mb-1 sm:mb-2 md:mb-5">
                Quick Links
              </h6>
              <ul className="font-light flex flex-col gap-[3px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Doctors</li>
                <li>Appointemt</li>
              </ul>
            </div>

            <div className="mt-3 md:mt-0">
              <h6 className="font-semibold text-base md:text-lg mb-1 sm:mb-2 md:mb-5">
                Legal
              </h6>
              <ul className="font-light flex flex-col gap-[3px]">
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
            <div className="mt-3 md:mt-0">
              <h6 className="font-semibold text-base md:text-lg mb-1 sm:mb-2 md:mb-5">
                Contact Us
              </h6>
              <ul className="font-light flex flex-col gap-[3px]">
                <li>
                  2118 Thoringdge Cir, Syracuse,
                  <br /> Connectcut 65464
                </li>
                <li>hello@mail.com</li>
                <li>+5845869</li>
              </ul>
            </div>
          </div>
          {/* border */}
          <div className="border-[1px] border-gray-400 my-2 sm:my-3 md:my-5"></div>
          {/* footer bottom */}
          <div className="flex justify-between items-center">
            <p className="font-light">All rights reserved</p>
            <div className="font-light">
              <ul className="flex flex-row gap-3">
                <li>
                  <FaFacebook className="h-5 w-5" />
                </li>
                <li>
                  <FaTwitter className="h-5 w-5" />
                </li>
                <li>
                  <FaInstagram className="h-5 w-5" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
