import React from "react";
import SectionTitle from "./SectionTitle";
import { FaCheck } from "react-icons/fa";

import img1 from "../assets/img/about-1.jpg";
import safety from "../assets/icon/safety.png";
import team from "../assets/icon/medical-team.png";

function AboutUs() {
  return (
    <section className=" py-14">
      <div className="flex items-center w-full max-w-screen-xl mx-auto px-4 md:px-12  py-8">
        <div className="bg-white w-[40%] px-5 relative">
          <figure className="about-image">
            <img
              className="rounded-lg w-full mx-auto max-h-[550px] h-full"
              src={img1}
              alt=""
            />
          </figure>
          <div className="absolute -bottom-5 right-0 bg-secondary   text-center rounded-lg p-4 box-border text-white w-[200px] h-[250px] flex flex-col justify-center z-20">
            <span className="font-poppins text-[70px] font-bold">20</span>
            <h3 className="text-[22px] font-semibold -mt-2">
              Years of experience in this field
            </h3>
          </div>
        </div>
        {/* about content */}
        <div className="w-[60%] pl-14 pr-4">
          <SectionTitle
            title="Welcome to Senior Care our goal is to make your life better"
            subTitle="Know about us"
            customTextAlign="text-left"
          />
          <div className="mt-4">
            <p className="text-xl">
              Everything we do at Home Instead CareGiver is driven by our
              universal mission: To enhance the lives of aging adults and their
              families.
            </p>
            <p className="mt-4">
              When our founders Paul and Lori Hogan began providing care for
              Paul’s grandmother to help her remain at home, they envisioned a
              future where all people could age with greater hope and success.
              We strive to make that vision a reality with every life we are
              privileged to touch.
            </p>
          </div>
          <div className="my-6 flex">
            <div className="flex gap-4 items-center">
              <img className="w-16" src={safety} alt="" />
              <span className="text-2xl">Safety & Security Guarantee</span>
            </div>
            <div className="flex gap-5">
              <img className="w-16" src={team} alt="" />
              <span className="text-2xl">Expert Medical Team</span>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <div className="bg-secondary h-5 w-5 rounded-full flex justify-center items-center">
                  <FaCheck size="12" color="white" />
                </div>
                <span>
                  Our approach is a commitment to patient-centered care
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-secondary h-5 w-5 rounded-full flex justify-center items-center">
                  <FaCheck size="12" color="white" />
                </div>
                <span>We are deeply rooted in the communities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-secondary h-5 w-5 rounded-full flex justify-center items-center">
                  <FaCheck size="12" color="white" />
                </div>
                <span>
                  Patient safety and quality of care are our top priorities.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
