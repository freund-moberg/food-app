import "./menuBar.scss";
import CartButton from "./buttons/cartButton";
import MainMenuButton from "./buttons/mainMenuButton";
import ProfileButton from "./buttons/profileButton";

const Menu = () => {
    //todo search bar filtering
    return (
        <div className="menu-bar">
            <MainMenuButton className="menu-bar__button" />
            <input />
            <ProfileButton className="menu-bar__button" />
            <CartButton className="menu-bar__button" />
        </div>
    );
};

export default Menu;
