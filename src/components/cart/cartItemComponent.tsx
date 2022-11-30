import IconButton from "../UI/iconButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { AppProps, CartItem } from "../../common/types";


const CartItemComponent = (props: AppProps) => {
    const dispatch = useDispatch();


    const clickHandler = (itemName: string) => {
        const clickedItem: CartItem = { name: itemName, amount: 1 };
        dispatch(addToCart(clickedItem));
    };


    return (
        <div className="cart-item">
            <p>{props.amount}x</p>
            <IconButton
                imageFilename="button_icons/minus_button.png"
                className="cart-item__button minus_button"
            />
            <p className="cart-item__name">{props.name}</p>
            <IconButton
                imageFilename="button_icons/plus_button.png"
                className="cart-item__button plus_button"
            />
            <p>{props.amount ? 25*props.amount : "?"}€</p>
        </div>
    );
};

export default CartItemComponent;
