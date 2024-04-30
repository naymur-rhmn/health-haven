function SingleBookingsCard({ title }) {
  return (
    <div className="cloud shadow-lg bg-secondary max-w-[300px] text-xl flex justify-center items-center text-center h-[130px] p-4 rounded-lg cursor-pointer bg-opacity-50 backdrop-blur-xl text-white font-poppins hover:bg-opacity-30 transition">
      <div className="flex flex-col">
        <span>{title}</span>
        <p className="text-sm">Lorem, ipsum.</p>
      </div>
    </div>
  );
}

export default SingleBookingsCard;
