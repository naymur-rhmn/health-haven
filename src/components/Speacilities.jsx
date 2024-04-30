import React from "react";
import SectionTitle from "./SectionTitle";

import heart from "../assets/icon/heart.png";
import gastroenterology from "../assets/icon/gastroenterology-2.png";
import bone from "../assets/icon/bone.png";
import dermatology from "../assets/icon/dermatology.png";
import diagnosis from "../assets/icon/diagnosis.png";
import physical from "../assets/icon/physical-therapy.png";
import stress from "../assets/icon/stress-management.png";
import urology from "../assets/icon/urology.png";
import brain from "../assets/icon/brain.png";
import surgical from "../assets/icon/surgical.png";

function Speacilities() {
  return (
    <section className="bg-white py-8">
      <div className="container  max-w-screen-xl px-4 md:px-12 mx-auto">
        <div>
          <SectionTitle
            subTitle="always caring"
            title="Our Speacialities"
            customTextAlign="text-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 md:mt-16">
          <div className="md:grid md:grid-cols-2  md:border-r-[1px] text-center">
            <div className="single-specialities">
              <img className="w-10 h-10" src={heart} alt="Cardiology" />
              <p>Cardiology</p>
            </div>
            <div className="single-specialities">
              <img
                className="w-10 h-10"
                src={gastroenterology}
                alt="Gastroenterology"
              />
              <p>Gastroenterology</p>
            </div>
            <div className="single-specialities md:border-b-2 md:border-t-2">
              <img className="w-10 h-10" src={bone} alt="Bones" />
              <p>Bones</p>
            </div>
            <div className="single-specialities md:border-b-2 md:border-t-2">
              <img className="w-10 h-10" src={dermatology} alt="Dermatology" />
              <p>Dermatology</p>
            </div>

            <div className="single-specialities">
              <img className="w-10 h-10" src={diagnosis} alt="Doctor Care" />
              <p>Doctor Care</p>
            </div>
            <div className="single-specialities">
              <img className="w-10 h-10" src={brain} alt="Neurology" />
              <p>Neurology</p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2  md:border-l-[1px] text-center">
            <div className="single-specialities">
              <img className="w-10 h-10" src={stress} alt="" />
              <p>Psychiatry</p>
            </div>
            <div className="single-specialities">
              <img className="w-10 h-10" src={surgical} alt="Surgery" />
              <p>Surgery</p>
            </div>
            <div className="single-specialities md:border-b-2 md:border-t-2">
              <img
                className="w-10 h-10"
                src={physical}
                alt="Physical therapy"
              />
              <p>Physical therapy</p>
            </div>
            <div className="single-specialities md:border-b-2 md:border-t-2">
              <img className="w-10 h-10" src={urology} alt="Urology" />
              <p>Urology</p>
            </div>
            <div className="single-specialities">
              <img className="w-10 h-10" src={heart} alt="Cardiovascular" />
              <p>Cardiovascular</p>
            </div>
            <div className="single-specialities">
              <img className="w-10 h-10" src={diagnosis} alt="Diagnosis" />
              <p>Diagnosis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speacilities;
