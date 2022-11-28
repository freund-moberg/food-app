import Cart from "./cart";
import MainMenu from "./mainMenu";
import "./menuBar.scss";
import Profile from "./profile";
const Menu = () => {
  return <div className="menu-bar">
    <MainMenu></MainMenu>
    <input/>
    <Profile></Profile>
    <Cart></Cart>


  </div>;
};

export default Menu;
