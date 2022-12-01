import Image from "../UI/image";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../../redux/searchReducer";
import { RootState } from "../../redux/store";
import allItems from "../../common/products";


const Popular = () => {
    const dispatch = useDispatch();

    const searchQuery = useSelector((state: RootState) => state.search.value);

    const clickHandler = (itemName: string) => {
        searchQuery === itemName
            ? dispatch(updateQuery(""))
            : dispatch(updateQuery(itemName));
    };

    /*
    const getMultipleRandom = (arr: Array<any>, num: number) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };
    const popularItems = getMultipleRandom(allItems, 2);
    */

    const popularItems = [allItems[15],allItems[12]];//

    console.log(popularItems);


    return (
        <div>
            <h3>Popular</h3>
            <div className="popular">
                {popularItems.map((item) => {
                    return (
                        <button
                            key={item.name}
                            className="slide"
                            onClick={() => {
                                clickHandler(item.name);
                            }}
                        >
                            <Image imageFilename={item.image} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
