import React from "react";

function AppoinmentBtn({ bgColor, textColor }) {
  return (
    <button
      className={`${bgColor} py-1 px-6 w-full ${textColor} border-none rounded transition-all font-bold font-yeseva shadow-md hover:bg-opacity-90 cloud`}
    >
      Appoinment
    </button>
  );
}

export default AppoinmentBtn;
