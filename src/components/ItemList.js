import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    return(
        <div>
           {items.map((item)=>(
            <>
            <div key={item.card.info.id} className="flex justify-between my-6 p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="mr-5 w-9/12 space-y-2">
                <p className="font-medium">
                {item.card.info.name}
                </p>
                <p className="text-bold">
                ₹{item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100}
                </p>
                <p className="text-xs">
                    {item.card.info.description}
                </p>

                </div>
                <div className="w-3/12 p-4 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <button className="p-2 bg-black text-white shadow-lg rounded-lg ">Add +</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} alt="" className="w-full rounded-lg"/>
                </div>
            </div>
            </>
           ))}
        </div>
    )
}
export default ItemList;