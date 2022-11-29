import Cart from "./cart";
import MainMenu from "./mainMenu";
import "./menuBar.scss";
import Profile from "./profile";
const Menu = () => {
    //todo search bar filtering
    return (
        <div className="menu-bar">
            <MainMenu className="menu-bar__button" />
            <input />
            <Profile className="menu-bar__button" />
            <Cart className="menu-bar__button" />
        </div>
    );
};

export default Menu;
