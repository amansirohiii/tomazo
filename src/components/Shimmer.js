const Shimmer = () => {
  const length = 9;
  return (
    <div className="sm:px-10 flex flex-wrap justify-center">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index}>
          <div className="w-[21rem] h-56 mx-5 my-3 bg-gray-200 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
          </div>
          <div className="w-52 h-4 mx-5 bg-gray-200 relative overflow-hidden rounded-lg">
            <div className="absolute h-56 inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
          </div>
          <div className="w-[21rem] h-8 mx-5 my-2 bg-gray-200 relative overflow-hidden rounded-lg">
            <div className="absolute h-56 inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
          </div>
          <div className="w-44 h-4 mx-5 bg-gray-200 relative overflow-hidden rounded-lg">
            <div className="absolute h-56 inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
          </div>
          <div className="w-32 h-4 mx-5 my-4 bg-gray-200 relative overflow-hidden rounded-lg">
            <div className="absolute h-56 inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
