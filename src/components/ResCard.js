import { CDN_URL } from "../utils/constants";

const ResCard = ({resData}) => {
  const { name, areaName, avgRating, cloudinaryImageId, cuisines, sla }=resData?.info;
  return (
    <div className="w-[21rem] my-3 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-95 duration-300">
      <div className="">
        <img src={CDN_URL + cloudinaryImageId} alt="" className="w-full h-56 rounded-lg" />
      </div>
      <div className="m-2">
      <h3 className="font-extrabold">{name}</h3>
      <div className="flex justify-between my-1">
       <span className={`${(avgRating>=4)?"bg-green-500":"bg-red-500"}  rounded-lg px-2 py-1`}> <p className="font-bold">{avgRating} <i className="fa-solid fa-star"></i> </p></span>
        <p className="eta">{sla.deliveryTime} mins</p>
      </div>
      <p className="whitespace-nowrap overflow-hidden overflow-ellipsis ">{cuisines.join(", ")}</p>

      <p className="font-medium my-1">{areaName}</p>
      </div>
    </div>
  );
};

// export const withPromotedLabel=(RestaurantCard)=>{
//   return(props)=>{
//     return(
//       <div>
//       <label className="absolute">
//       Promoted
//       </label>
//       <RestaurantCard {...props}/>
//       </div>
//     );
//   };
// };
export default ResCard;
