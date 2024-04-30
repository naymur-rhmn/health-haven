import React, { useEffect, useState } from "react";
import AppoinmentBtn from "./AppoinmentBtn";
import NavLinks from "./NavLinks";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [fixedTop, setFixedTop] = useState(false);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  const scrollHandler = () => {
    if (window.scrollY >= 60) {
      setFixedTop(true);
    } else {
      setFixedTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className="sticky -top-[0.5px] shadow-2xl z-30">
      {/* nav section */}
      <div className="bg-primary relative z-20">
        <div className="container  max-w-screen-xl mx-auto  px-4 md:px-8">
          <div className="flex justify-between items-center h-[75px] sticky top-0">
            {/* logo */}
            <div className="text-white">logo here</div>
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

// import React, { useEffect, useState } from "react";
// import AppoinmentBtn from "./AppoinmentBtn";

// function Navbar() {
//   const [toggle, setToggle] = useState(false);
//   const [fixedTop, setFixedTop] = useState(false);

//   function handleClick() {
//     setToggle((prev) => !prev);
//   }

//   const scrollHandler = () => {
//     if (window.scrollY > 60) {
//       setFixedTop(true);
//     } else {
//       setFixedTop(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", scrollHandler);
//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//     };
//   }, []);

//   return (
//     <header
//       className={`bg-primary  relative z-20   ${
//         fixedTop
//           ? "sticky top-0 bg-opacity-80 bg-clip-padding blur-backdrop-filter"
//           : ""
//       }`}
//     >
//       <nav className={`relative z-20`}>
//         <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
//           <div
//             className={`flex justify-between items-center   ${
//               fixedTop ? "h-[80px]" : "h-[90px]"
//             }  `}
//           >
//             <div className="text-white">Logo here</div>
//             <ul className="hidden md:flex gap-6 text-white font-poppins font-medium text-sm">
//               <li className="hover:text-tone transition-all">
//                 <a className="tracking-wider" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="hover:text-tone transition-all">
//                 <a className="tracking-wider" href="#">
//                   Services
//                 </a>
//               </li>
//               <li className="hover:text-tone transition-all">
//                 <a className="tracking-wider" href="#">
//                   Doctors
//                 </a>
//               </li>
//               <li className="hover:text-tone transition-all">
//                 <a className="tracking-wider" href="#">
//                   About Us
//                 </a>
//               </li>
//               <li className="hover:text-tone transition-all">
//                 <a className="tracking-wider" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <div className="hidden md:block">
//               <AppoinmentBtn bgColor="bg-tone" textColor="text-primary" />
//             </div>
//             <div
//               onClick={handleClick}
//               id="nav-icon"
//               className={`md:hidden ${toggle ? "open" : ""}`}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div
//         className={`md:hidden bg-tone font-poppins font-medium  w-full absolute  transition duration-500  z-10 ${
//           toggle ? "block visible" : "invisible -translate-y-96"
//         }`}
//       >
//         <nav className="container mx-auto px-4 py-8">
//           <ul className="text-primary flex flex-col items-center gap-3 font-medium text-[15px]">
//             <li>
//               <a href="#" className="hover:font-bold">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:font-bold">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:font-bold">
//                 Doctors
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:font-bold">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:font-bold">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <div className="px-14 mt-4">
//             <AppoinmentBtn bgColor="bg-primary" textColor="text-tone" />
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
