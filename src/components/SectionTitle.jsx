import React from "react";

function SectionTitle({ subTitle, title, customTextAlign }) {
  return (
    <div className={`${customTextAlign}`}>
      <p className="text-secondary  uppercase text-sm font-bold tracking-widest">
        {subTitle}
      </p>
      <h2 className="text-primary font-semibold font-yeseva text-3xl mt-1 capitalize">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
