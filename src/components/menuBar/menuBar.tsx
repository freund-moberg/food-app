import "./menuBar.scss";
import CartButton from "./buttons/cartButton";
import StoreButton from "./buttons/storeButton";
import ProfileButton from "./buttons/profileButton";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Menu = () => {
    //todo search bar filtering
    const loggedIn = useSelector((state: RootState) => state.account.loggedIn);

    return (
        <div className="menu-bar">
            <Link to="/">
                <StoreButton className="menu-bar__button" />
            </Link>
            <SearchBar />
            <Link to={loggedIn ? "/profile" : "/profile/login"}>
                <ProfileButton className="menu-bar__button" />
            </Link>
            <CartButton className="menu-bar__button" />
        </div>
    );
};

export default Menu;
