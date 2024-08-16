import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} FoodItem={items}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
