import "./app.scss";
import MenuBar from "./components/menuBar/menuBar";
import Store from "./components/store/store";
import Cart from "./components/cart/cart";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { Tabs } from "./common/types"
import Profile from "./components/profile/profile";

//sfc

function App() {
    const cartOpen = useSelector((state: RootState) => state.cart.cartOpen);
    const displayedTab = useSelector((state: RootState) => state.tab.displayedTab);

    const renderDisplay = () => {
        switch(displayedTab){
            case Tabs.STORE:
                return <Store />
            case Tabs.PROFILE:
                return <Profile />
        }
    }

    return (
        <div className="App">
            <MenuBar />
            <div className="display">
                {renderDisplay()}
                {cartOpen ? <Cart /> : null}
            </div>
        </div>
    );
}

export default App;
