import "./items.scss";
import Card from "../UI/card";
import Image from "../UI/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../index";
import { Category, CartItem } from "../../common/types";
import { addToCart, removeFromCart } from "../../redux/cart";

const Items = () => {
    const dispatch = useDispatch();

    const allItems = [
        {
            name: "Cheeseburger",
            image: "cheeseburger.png",
            type: Category.BURGER,
        },
        { name: "Big Mac", image: "big-mac.png", type: Category.BURGER },
        {
            name: "Royale Burger",
            image: "royale-burger.png",
            type: Category.BURGER,
        },
        {
            name: "Mozzarella Salad",
            image: "mozzarella-salad.png",
            type: Category.SALAD,
        },
        { name: "Greek Salad", image: "greek-salad.png", type: Category.SALAD },
        {
            name: "Chicken Salad",
            image: "chicken-salad.png",
            type: Category.SALAD,
        },
        {
            name: "Pizza Italiana",
            image: "italian-pizza.png",
            type: Category.PIZZA,
        },
        {
            name: "Pizza Capricciosa",
            image: "capricciosa.png",
            type: Category.PIZZA,
        },
        { name: "Pizza Diavola", image: "diavola.png", type: Category.PIZZA },
        { name: "Coca-Cola", image: "coca-cola.png", type: Category.DRINK },
        { name: "Fanta", image: "fanta.png", type: Category.DRINK },
        { name: "Sprite", image: "sprite.png", type: Category.DRINK },
    ];

    const selectedCategory = useSelector(
        (state: RootState) => state.category.value
    );

    const itemList = allItems.filter(
        (item) =>
            selectedCategory === Category.ALL || item.type === selectedCategory
    );

    const clickHandler = (itemName: string) => {
        const clickedItem: CartItem = { name: itemName, amount: 1 };
        dispatch(addToCart(clickedItem));
    };

    return (
        <div>
            <h3>Items</h3>
            {/*<button onClick={() => {dispatch(removeFromCart({ name: "Cheeseburger", amount: 1 }))}}></button>*/}
            <div className="items">
                {itemList.map((item) => {
                    return (
                        <Card
                            key={item.name}
                            onClick={() => {
                                clickHandler(item.name);
                            }}
                        >
                            <Image filename={item.image} />
                            <p>{item.name}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Items;
