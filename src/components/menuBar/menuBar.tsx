import Cart from "./cart";
import MainMenu from "./mainMenu";
import "./menuBar.scss";
import Profile from "./profile";
const Menu = () => {
    return (
        <div className="menu-bar">
            <MainMenu />
            <input />
            <Profile />
            <Cart />
        </div>
    );
};

export default Menu;
