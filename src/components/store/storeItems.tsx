import "./store.scss";
import Card from "components/UI/card";
import Image from "components/UI/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { Category, CartItem } from "common/types";
import { addToCart } from "redux/reducers/cartReducer";
import allItems from "common/products";

const StoreItems = () => {
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state: RootState) => state.category.selected);

    const searchQuery = useSelector((state: RootState) => state.search.value);

    const clickHandler = (itemName: string, itemPrice: number) => {
        const clickedItem: CartItem = { name: itemName, amount: 1, price: itemPrice };
        dispatch(addToCart(clickedItem));
    };

    const itemList = allItems.filter(
        (item) =>
            (selectedCategory === Category.ALL || item.type === selectedCategory) &&
            (searchQuery === "" ||
                item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    itemList.sort((a, b) => (a.name > b.name ? 1 : -1));

    return (
        <div>
            <h3>Items</h3>
            <div className="store-cards">
                {itemList.map((item) => {
                    return (
                        <Card
                            key={item.name}
                            onClick={() => {
                                clickHandler(item.name, item.price);
                            }}
                        >
                            <Image imageFilename={item.image} />
                            <p>{item.name}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default StoreItems;
