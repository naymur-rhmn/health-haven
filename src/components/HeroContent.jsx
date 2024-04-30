function HeroContent() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex justify-center flex-col  text-left font-poppins -mt-16 h-full">
      <div className="max-w-[712px]">
        <p className="text-white text-base tracking-wider font-semibold mb-4">
          Welcome to SS Health
        </p>
        <h2 className="text-7xl leading-[75px] text-white z-50 font-semibold">
          {/* We take care because we care */}
          Excellence in patient-centered care
        </h2>
        {/* <p className="text-white text-base tracking-wide">
            Excellent health service for all patients who come to our hospital
          </p> */}
      </div>
    </div>
  );
}

export default HeroContent;
