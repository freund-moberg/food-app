import IconButton from "../UI/iconButton";

const Cart = (props: { className?: string }) => {
    return (
        <IconButton
            image="button_icons/cart_button.png"
            className={props.className}
        />
    );
};

export default Cart;
