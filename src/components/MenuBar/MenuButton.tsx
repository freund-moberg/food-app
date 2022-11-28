import Image from "../UI/Image";

const MenuButton = (props: {image: string}) => {
  return (
    <button className="menu-bar__button ">
      <Image filename={props.image} />
    </button>
  );
};

export default MenuButton;
