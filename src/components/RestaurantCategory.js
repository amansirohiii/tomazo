import ItemList from "./ItemList";

const RestaurantCategory =({data})=>{
    console.log(data)
    return(
        <div className="w-6/12 p-4 m-auto bg-gray-10 shadow-lg my-2 border-gray-400 border-b-2">
            <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            <ItemList key={data.id} items={data.itemCards}/>
        </div>

    )
}
export default RestaurantCategory;