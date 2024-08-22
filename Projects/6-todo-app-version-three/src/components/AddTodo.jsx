import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const itemNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    const itemName = itemNameElement.current.value;
    const itemDueDate = dueDateElement.current.value;
    itemNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(itemName, itemDueDate);
  };

  return (
    <form onSubmit={handleOnClick} className="row my-row">
      <div className="col-6">
        <input
          type="text"
          ref={itemNameElement}
          placeholder="Enter Todo here"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button className="btn btn-success">
          <BiMessageAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
