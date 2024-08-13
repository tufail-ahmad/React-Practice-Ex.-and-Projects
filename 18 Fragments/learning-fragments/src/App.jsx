import ErrorMessage from "./components/ErrorMessages";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Meat", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1 className="item-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
