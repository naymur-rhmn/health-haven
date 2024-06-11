import React from "react";
import SingleBookingsCard from "./SingleBookingsCard";
import appointment from "../assets/icon/appointment.png";
import videoCall from "../assets/icon/video-call.png";
import report from "../assets/icon/health-report.png";

function Bookings() {
  return (
    <div className="-mt-[73px] bg-transparent z-10 relative flex h-full">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-center gap-[10px] bg-secondary rounded-lg shadow bg-opacity-30 backdrop-blur-sm p-2">
        <div className="grid grid-cols-3 gap-2">
          <SingleBookingsCard
            title="Request an appoinment"
            subtitle="Your Path to Better Health"
            img={appointment}
          />
          <SingleBookingsCard
            title="Video Consultancy"
            subtitle="Connect with doctor"
            img={videoCall}
          />
          <SingleBookingsCard
            title="Medical Records"
            subtitle="Your Health Story"
            img={report}
          />
        </div>
      </div>
    </div>
  );
}

export default Bookings;
