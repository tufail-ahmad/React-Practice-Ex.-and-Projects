import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "14/08/2024",
    },
    {
      name: "Go to College",
      dueDate: "14/08/2024",
    },
    {
      name: "Go to WotkPlace",
      dueDate: "14/08/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
