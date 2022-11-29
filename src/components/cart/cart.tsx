import "./cart.scss"
import CartItem from "./cartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    return <div className="cart"><CartItem></CartItem></div>;
};

export default Cart;
