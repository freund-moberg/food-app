import Categories from "./categories";
import Popular from "./popular";
import StoreItems from "./storeItems";

const Store = () => {
    return (
        <div className="shop">
            <div className="store">
                <Categories />
                <StoreItems />
            </div>
            <Popular />
        </div>
    );
};

export default Store;
