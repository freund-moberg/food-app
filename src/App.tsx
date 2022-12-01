import "./app.scss";
import MenuBar from "./components/menuBar/menuBar";
import Store from "./components/store/store";
import Cart from "./components/cart/cart";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

//sfc

function App() {
    const cartOpen = useSelector((state: RootState) => state.cart.cartOpen);

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
