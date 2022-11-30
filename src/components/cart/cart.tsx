import "./cart.scss";
import CartItemComponent from "./cartItemComponent";
import { useSelector } from "react-redux";
import { RootState } from "../..";

const Cart = () => {
    const cartItemList = useSelector((state: RootState) => state.cart.value.items);

    return (
        <div className="cart">
            <h3>Cart</h3>
            {cartItemList.map((cartItem) => {
                return <CartItemComponent key={cartItem.name} name={cartItem.name} amount={cartItem.amount} />;
            })}
            <p className="cart-total">Total Price:</p>
        </div>
    );
};

export default Cart;
