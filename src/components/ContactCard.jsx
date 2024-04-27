import React from "react";

function ContactCard({ icon, title, text1, text2 }) {
  return (
    <div className="rounded bg-tone p-4 min-h-[233px]  flex flex-col  justify-center text-primary hover:text-white hover:bg-primary transition font-poppins">
      <p className="font-bold text-lg uppercase">{title}</p>
      <p className="text-sm">{text1}</p>
      <p className="text-sm">{text2}</p>
    </div>
  );
}

export default ContactCard;
