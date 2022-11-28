import Card from "../UI/card";
import Image from "../UI/image";

const Items = () => {

    const itemList = [
        { name: "Royale Burger", image: "royale-burger.png" },
        { name: "Chicken Salad", image: "chicken-salad.png" },
        { name: "Pizza Italiana", image: "italian-pizza.png" },
        { name: "Coca-Cola", image: "coca-cola.png" },
    ];

    return <div><p>Items</p><div className="items">
    {itemList.map((item) => {
      return (
        <Card>
          <Image filename={item.image} />
          <p>{item.name}</p>
        </Card>
      );
    })}
  </div></div>;
};

export default Items;
