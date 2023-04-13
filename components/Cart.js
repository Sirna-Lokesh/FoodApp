import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
    const cartItems = useSelector((store) => {
        return store.cart.items;
    })
    console.log(cartItems)
    return (
        <div>
            {cartItems.map((item,index)=>{
                return <CartItem item={item} key={index}></CartItem>
            })}
        </div>
    )
}

export default Cart ; 