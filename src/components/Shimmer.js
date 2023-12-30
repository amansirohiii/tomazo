const Shimmer = () => {
  const length = 9;
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="w-[21rem] h-56 mx-5 my-3 bg-gray-200 relative overflow-hidden rounded-lg"
        >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>

        </div>
      ))}
    </div>
  );
};
export default Shimmer;
