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
import Settings from "components/profile/settings";
import { useState, useEffect } from "react";
import Modal from "components/UI/modal";


//sfc

function App() {
    const cartOpen = useSelector((state: RootState) => state.cart.cartOpen);
    const darkTheme = useSelector((state: RootState) => state.account.settings.darkTheme);

    useEffect(() => {
        const root = document.documentElement;
        root?.style.setProperty("--primary-color", darkTheme ? "#282c34" : "#bdbdbd");
        root?.style.setProperty("--text-color", darkTheme ? "white" : "#282c34");
        root?.style.setProperty("--secondary-color", darkTheme ? "#3c424d" : "#888888");
    }, [darkTheme]);

    //change to reducer
    const [modal, setModal] = useState({
        active: false,//
        title: "Warning",
        message: "Are you sure you want to log out?",
    });

    const modalHandler = () => {
        setModal({
            active: false,
            title: "",
            message: "",
        });
    };
    return (
        <div className="App">
            {modal.active && (
                <Modal
                    onClick={modalHandler}
                    onUnfocus={modalHandler}
                    title={modal.title}
                    message={modal.message}
                ></Modal>
            )}
            <MenuBar />
            <div className="display">
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route index element={<ProfileInfo />} />
                        <Route path="login" element={<Login />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                </Routes>

                {cartOpen ? <Cart /> : null}
            </div>
        </div>
    );
}

export default App;
