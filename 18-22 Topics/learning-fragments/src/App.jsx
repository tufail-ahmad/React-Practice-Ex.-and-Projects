import ErrorMessage from "./components/ErrorMessages";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  const onkeydown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="item-heading">Healthy Foods</h1>
      <FoodInput handleKeyDown={onkeydown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
