const CardLoad = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-3 items-center">
        <div className="w-50 h-60 bg-gray-200 rounded-2xl animate-pulse"></div>
        <p className="w-[70%] h-5 bg-gray-200 text-center text-lg font-semibold animate-pulse dark:text-white"></p>
      </div>
    </div>
  );
}

export default CardLoad