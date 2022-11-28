import Image from "../UI/image";

const MenuButton = (props: { image: string }) => {
    return (
        <button className="menu-bar__button ">
            <Image filename={props.image} />
        </button>
    );
};

export default MenuButton;
