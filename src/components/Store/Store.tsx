import Categories from "./Categories";
import Popular from "./Popular";
import Items from "./Items";

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
