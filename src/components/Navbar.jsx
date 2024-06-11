import React, { useContext, useState } from "react";
import AppoinmentBtn from "./AppoinmentBtn";
import NavLinks from "./NavLinks";
// import { AuthContext } from "../provider/AuthProvider";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  // const context = useContext(AuthContext);
  // console.log(context);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  return (
    <nav className="sticky -top-[0.5px] shadow-2xl z-30">
      {/* nav section */}
      <div className="bg-primary relative z-20">
        <div className="container  max-w-screen-xl mx-auto  px-4 md:px-8">
          <div className="flex justify-between items-center h-[75px] sticky top-0">
            {/* logo */}
            <div className="text-white text-2xl">HealthHaven</div>
            {/* menu */}
            <ul className="hidden md:flex gap-6 text-black font-poppins  font-medium text-normal">
              <NavLinks color="text-tone" weight="font-semibold" />
            </ul>
            {/* appoinment btn */}
            <div className="hidden md:block">
              <AppoinmentBtn bgColor="bg-tone" textColor="text-primary" />
            </div>
            {/* mobile menu icon */}
            <div
              onClick={handleClick}
              id="nav-icon"
              className={`md:hidden ${toggle ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      <div
        className={`md:hidden bg-tone font-poppins font-medium  py-6 w-full absolute  transition duration-500 ease-in-out z-10 ${
          toggle ? " translate-y-0" : " -translate-y-[180%]"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="text-primary flex flex-col  items-center gap-3 font-medium text-[14px]">
            <NavLinks
              onClick={handleClick}
              color="text-primary"
              weight="font-bold"
            />
          </ul>
          {/* appoinment */}
          <div className="px-14 mt-3">
            <AppoinmentBtn bgColor="bg-primary" textColor="text-tone" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
