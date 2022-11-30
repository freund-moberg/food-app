import "./store.scss";
import Card from "../UI/card";
import Image from "../UI/image";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../redux/categoryReducer";
import { Category } from "../../common/types";
import { RootState } from "../../index";

const Categories = () => {
    const dispatch = useDispatch();

    const categoryList = [
        { name: "Burgers", image: "royale-burger.png", type: Category.BURGER },
        { name: "Salads", image: "chicken-salad.png", type: Category.SALAD },
        { name: "Pizza", image: "italian-pizza.png", type: Category.PIZZA },
        { name: "Drinks", image: "coca-cola.png", type: Category.DRINK },
        { name: "Desert", image: "ice-cream.png", type: Category.DESERT },
    ];

    const selectedCategory = useSelector((state: RootState) => state.category.value);

    const clickHandler = (typeClicked: Category) => {
        if (typeClicked === selectedCategory) {
            dispatch(selectCategory(Category.ALL));
        } else {
            dispatch(selectCategory(typeClicked));
        }
    };

    return (
        <div>
            <h3>Categories</h3>
            <div className="store-cards">
                {categoryList.map((categoryElement) => {
                    return (
                        <Card
                            onClick={() => {
                                clickHandler(categoryElement.type);
                            }}
                            className={
                                selectedCategory === categoryElement.type
                                    ? "selected"
                                    : ""
                            }
                            key={categoryElement.name}
                        >
                            <Image imageFilename={categoryElement.image} />
                            <p>{categoryElement.name}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
