import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <div>
            {items.map((item) => {
                const cartItem = cartItems.find(i => i.card.info.id === item.card.info.id);
                return (
                    <div key={item.card.info.id} className="flex justify-between my-6 p-2 m-2 border-gray-200 border-b-2 text-left">
                        <div className="mr-5 w-9/12 space-y-2">
                            <p className="font-medium">{item.card.info.name}</p>
                            <p className="text-bold">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</p>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-6/12 sm:w-3/12 p-4 relative">
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                {cartItem ? (
                                    <div className="flex items-center">
                                        <button className="text-xs text-white sm:text-xl whitespace-nowrap mx-5 bg-black rounded-full w-8" onClick={() => handleRemoveItem(item.card.info.id)}>-</button>
                                        <span className="mx-2 font-bold">{cartItem.quantity}</span>
                                        <button className="text-xs text-white sm:text-xl whitespace-nowrap mx-5 bg-black rounded-full w-8" onClick={() => handleAddItem(item)}>+</button>
                                    </div>
                                ) : (
                                    <button className="text-xs sm:text-sm p-2 bg-black text-white shadow-lg rounded-lg whitespace-nowrap" onClick={() => handleAddItem(item)}>Add +</button>
                                )}
                            </div>
                            <img src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : null} alt="" className="rounded-lg" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
