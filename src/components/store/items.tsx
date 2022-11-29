import "./items.scss";
import Card from "../UI/card";
import Image from "../UI/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../index";
import { Category, CartItem } from "../../common/types";
import { addToCart, removeFromCart } from "../../redux/cartReducer";
import allItems from "../../common/products";

const Items = () => {
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state: RootState) => state.category.value);

    const itemList = allItems.filter(
        (item) => selectedCategory === Category.ALL || item.type === selectedCategory
    );

    const clickHandler = (itemName: string) => {
        const clickedItem: CartItem = { name: itemName, amount: 1 };
        dispatch(addToCart(clickedItem));
    };

    return (
        <div>
            <h3>Items</h3>
            <div className="items">
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

export default Items;
