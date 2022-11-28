import Categories from "./categories";
import Popular from "./popular";
import Items from "./items";

const Store = () => {
  return (
    <div className="store">
      <p>Store</p>
      <Categories></Categories>
      <Popular></Popular>
      <Items></Items>
    </div>
  );
};

export default Store;
