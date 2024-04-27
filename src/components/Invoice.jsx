import React from "react";
import { PiHeartbeat } from "react-icons/pi";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

function Invoice() {
  return (
    <section className="bg-secondary shadow-2xl">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-0  py-8 text-white">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-normal text-center lg:text-left">
            <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-md">
              <PiHeartbeat className="h-8 w-7 text-secondary " />
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold font-poppins">
                3000+
              </p>
              <p className="text-base lg:text-lg font-poppins ">
                Satisfied Patients
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-normal  text-center lg:text-left">
            <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-md">
              <LiaHospitalSolid className="h-8 w-7 text-secondary " />
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold font-poppins">10+</p>
              <p className="text-base lg:text-lg font-poppins">Branches</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-normal  text-center lg:text-left">
            <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-md">
              <FaUserDoctor className="h-8 w-7 text-secondary " />
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold font-poppins">
                200+
              </p>
              <p className="text-base lg:text-lg font-poppins">Doctors</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-normal  text-center lg:text-left">
            <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-md">
              <FaShieldAlt className="h-8 w-7 text-secondary " />
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold font-poppins">20+</p>
              <p className="text-base lg:text-lg font-poppins">Speacialities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invoice;
