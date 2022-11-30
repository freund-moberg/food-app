import "./store.scss";
import Card from "../UI/card";
import Image from "../UI/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../index";
import { Category, CartItem } from "../../common/types";
import { addToCart } from "../../redux/cartReducer";
import allItems from "../../common/products";

const StoreItems = () => {
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state: RootState) => state.category.value);

    const clickHandler = (itemName: string) => {
        const clickedItem: CartItem = { name: itemName, amount: 1 };
        dispatch(addToCart(clickedItem));
    };

    const itemList = allItems.filter(
        (item) => selectedCategory === Category.ALL || item.type === selectedCategory
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
                                clickHandler(item.name);
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
