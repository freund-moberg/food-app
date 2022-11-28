import "./store.scss";
import Card from "../UI/card";
import Image from "../UI/image";

const Categories = () => {
  const categoryList = [
    { name: "Burgers", image: "royale-burger.png" },
    { name: "Salads", image: "chicken-salad.png" },
    { name: "Pizza", image: "italian-pizza.png" },
    { name: "Drinks", image: "coca-cola.png" },
  ];

  return (
    <div>
      <h3>Categories</h3>
      <div className="categories">
        {categoryList.map((category) => {
          return (
            <Card>
              <Image filename={category.image} />
              <p>{category.name}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
