import "./items.scss";

import Card from "../UI/card";
import Image from "../UI/image";

const Items = () => {
    const itemList = [
        { name: "Cheeseburger", image: "cheeseburger.png" },
        { name: "Big Mac", image: "big-mac.png" },
        { name: "Royale Burger", image: "royale-burger.png" },
        { name: "Mozzarella Salad", image: "mozzarella-salad.png" },
        { name: "Greek Salad", image: "greek-salad.png" },
        { name: "Chicken Salad", image: "chicken-salad.png" },
        { name: "Pizza Italiana", image: "italian-pizza.png" },
        { name: "Pizza Capricciosa", image: "capricciosa.png" },
        { name: "Pizza Diavola", image: "diavola.png" },
        { name: "Coca-Cola", image: "coca-cola.png" },
        { name: "Fanta", image: "fanta.png" },
        { name: "Sprite", image: "sprite.png" },
    ];

    return (
        <div>
            <h3>Items</h3>
            <div className="items">
                {itemList.map((item) => {
                    return (
                        <Card key={item.name}>
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
