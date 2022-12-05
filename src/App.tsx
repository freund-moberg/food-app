import "app.scss";
import MenuBar from "components/menuBar/menuBar";
import Store from "components/store/store";
import Cart from "components/cart/cart";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import ProfileInfo from "components/profile/profileInfo";
import { Route, Routes } from "react-router-dom";
import Profile from "components/profile/profile";
import Login from "components/profile/login";

//sfc

function App() {
    const cartOpen = useSelector((state: RootState) => state.cart.cartOpen);

    return (
        <div className="App">
            <MenuBar />
            <div className="display">
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route index element={<ProfileInfo />} />
                        <Route path="login" element={<Login />} />
                        <Route path="settings" element={<h1>settings</h1>} />
                    </Route>
                </Routes>
                {cartOpen ? <Cart /> : null}
            </div>
        </div>
    );
}

export default App;
