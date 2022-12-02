import Image from "../UI/image";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../../redux/reducers/searchReducer";
import { RootState } from "../../redux/store";
import allItems from "../../common/products";

const Popular = () => {
    const dispatch = useDispatch();

    const getMultipleRandom = (arr: Array<any>, num: number) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    //const [popularItems] = useState(getMultipleRandom(allItems, 2));
    const popularItems = useMemo(() => {
        return getMultipleRandom(allItems, 2);
    }, [])

    const searchQuery = useSelector((state: RootState) => state.search.value);

    const clickHandler = (itemName: string) => {
        searchQuery === itemName
            ? dispatch(updateQuery(""))
            : dispatch(updateQuery(itemName));
    };

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
