import "./menuBar.scss";
import CartButton from "./buttons/cartButton";
import StoreButton from "./buttons/storeButton";
import ProfileButton from "./buttons/profileButton";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";

const Menu = () => {
    //todo search bar filtering
    return (
        <div className="menu-bar">
            <Link to="/">
                <StoreButton className="menu-bar__button" />
            </Link>
            <SearchBar />
            <Link to="/profile">
                <ProfileButton className="menu-bar__button" />
            </Link>
            <CartButton className="menu-bar__button" />
        </div>
    );
};

export default Menu;
