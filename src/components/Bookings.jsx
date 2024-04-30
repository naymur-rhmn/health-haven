import React from "react";
import SingleBookingsCard from "./SingleBookingsCard";

function Bookings() {
  return (
    <div className="-mt-[73px] bg-transparent z-10 relative flex h-full">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-center gap-[10px] bg-secondary rounded-lg shadow bg-opacity-30 backdrop-blur-sm p-2">
        <div className="grid grid-cols-3 gap-2">
          <SingleBookingsCard title="Request an appoinment" />
          <SingleBookingsCard title="Telehealth appoinment" />
          <SingleBookingsCard title="Medical Records" />
        </div>
      </div>
    </div>
  );
}

export default Bookings;
