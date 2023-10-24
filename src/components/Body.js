import { resData } from "../utils/resData";
import ResCard from "./ResCard";

export default Body = () => {
    return (
        <div className="body-cont">
            <div className="search">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search for Restaurant and Foods"
                />
            </div>
            <div className="cards-cont">
                {resData.map((resData) => {
                    return <ResCard key={resData.info.id} resData={resData} />;
                })}
            </div>
        </div>
    );
};