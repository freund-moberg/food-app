import Cart from "./Cart";
import MainMenu from "./MainMenu";
import "./MenuBar.scss";
import Profile from "./Profile";
const Menu = () => {
  return <div className="menu-bar">
    <MainMenu></MainMenu>
    <input/>
    <Profile></Profile>
    <Cart></Cart>


  </div>;
};

export default Menu;
