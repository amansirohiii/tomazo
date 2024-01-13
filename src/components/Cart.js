import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
const Cart = () => {
    const cartItems= useSelector((store)=>store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearCart());
    };

  return (
    <div className="w-11/12 sm:w-6/12 m-auto text-center">

        <h1 className="font-bold text-2xl text-center m-4">Cart</h1>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClear}>Clear Cart</button>

        <ItemList items={cartItems}/>
    </div>
  )
}

export default Cart;