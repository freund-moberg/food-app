import "./menuBar.scss";
import CartButton from "./cartButton";
import MainMenuButton from "./mainMenuButton";
import ProfileButton from "./profileButton";

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
