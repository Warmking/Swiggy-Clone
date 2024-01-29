import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const items = useSelector((store)=>
        store.cart.items
    )
    console.log(items); 
    return <div className="text-center">
        <h1 className="m-10 text-3xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 bg-black text-white rounded-lg" 
            onClick={handleClearCart}
            >
                clear cart
            </button>
            <ItemList listItems={items}/>
        </div>
    </div>
}

export default Cart;