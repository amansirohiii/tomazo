import { CDN_URL } from "../utils/constants";

export default ResCard = ({resData}) => {
  const { name, areaName, avgRating, cloudinaryImageId, cuisines, sla }=resData?.info;
  return (
    <div className="res-cont">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} alt="" className="image" />
      </div>
      <h3 className="res-name">{name}</h3>
      <div className="res-data">
        <p className="ratings">{avgRating} stars </p>
        <p className="eta">{sla.deliveryTime} mins</p>
      </div>
      <p className="cuisines">{cuisines.join(", ")}</p>

      <p className="area-name">{areaName}</p>
    </div>
  );
};
