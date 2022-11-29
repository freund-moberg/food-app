import "./app.scss";
import MenuBar from "./components/menuBar/menuBar";
import Store from "./components/store/store";
import Cart from "./components/cart/cart";
import { RootState } from "./index";
import { useSelector } from "react-redux";
import { toggleCart } from "./redux/cartReducer";

function App() {
    const cartOpen = useSelector((state: RootState) => state.cart.value.cartOpen);

    return (
        <div className="App">
            <MenuBar />
            <div className="display">
                <Store />
                {cartOpen ? <Cart /> : null}
            </div>
        </div>
    );
}

export default App;
