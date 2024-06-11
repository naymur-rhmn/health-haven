function SingleBookingsCard({ title, subtitle, img }) {
  return (
    <div className="cloud group shadow-lg bg-secondary max-w-[300px] flex justify-center items-center text-center h-[130px] p-4 rounded-lg cursor-pointer bg-opacity-50 backdrop-blur-xl text-gray-700 font-poppins hover:bg-opacity-30 transition">
      <div className="flex flex-col items-center">
        <img className="w-[40px] block mb-2" src={img} alt="" />
        <h2 className=" text-xl">{title}</h2>
        <p className="text-sm group-hover:text-white">{subtitle}</p>
      </div>
    </div>
  );
}

export default SingleBookingsCard;
