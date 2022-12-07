import "./cart.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "redux/reducers/cartReducer";
import IconButton from "../UI/iconButton";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItemList = useSelector((state: RootState) => state.cart.items);
    const loggedIn = useSelector((state: RootState) => state.account.loggedIn);

    const plusClickHandler = (itemName: string) => {
        dispatch(addToCart({ name: itemName, amount: 1 }));
    };

    const minusClickHandler = (itemName: string) => {
        dispatch(removeFromCart({ name: itemName, amount: 1 }));
    };

    const calculateTotalPrice = () => {
        return cartItemList.reduce((a, b) => a + b.amount * b.price, 0); //price
    };

    return (
        <div className="cart">
            <h3>Cart</h3>
            <div className="cart-items">
                {cartItemList.map((cartItem) => {
                    return (
                        <div className="cart-item" key={cartItem.name}>
                            <p>{cartItem.amount}x</p>
                            <IconButton
                                imageFilename="button_icons/minus_button.png"
                                className="cart-item__button minus_button"
                                onClick={() => minusClickHandler(cartItem.name)}
                            />
                            <p>{cartItem.name}</p>
                            <IconButton
                                imageFilename="button_icons/plus_button.png"
                                className="cart-item__button plus_button"
                                onClick={() => plusClickHandler(cartItem.name)}
                            />
                            <p>
                                {cartItem.amount ? cartItem.price * cartItem.amount : "?"}
                                €
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="cart-total">
                {cartItemList.length > 0 ? (
                    loggedIn ? (
                        <IconButton
                            imageFilename="button_icons/cart_button.png"
                            className="cart-total__buy"
                        />
                    ) : (
                        <Link to="/profile/login">
                            <IconButton
                                imageFilename="button_icons/logout_button.png"
                                className="cart-total__login"
                            />
                        </Link>
                    )
                ) : (
                    <div />
                )}
                {}
                <h4>Total Price:</h4>
                <div></div>
                <h4>{calculateTotalPrice()}€</h4>
            </div>
        </div>
    );
};

export default Cart;
