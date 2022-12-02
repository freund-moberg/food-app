import IconButton from "../../UI/iconButton";
import { AppProps } from "../../../common/types";
import { toggleCart } from "../../../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";

const CartButton = (props: AppProps) => {
    const dispatch = useDispatch();

    return (
        <IconButton
            imageFilename="button_icons/cart_button.png"
            className={props.className}
            onClick={() => {dispatch(toggleCart())}}
        />
    );
};

export default CartButton;
