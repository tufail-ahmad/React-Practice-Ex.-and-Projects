import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState();
  const [itemDueDate, setItemDueDate] = useState();

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDateChange = (event) => {
    setItemDueDate(event.target.value);
  };

  const hanleOnClick = () => {
    onNewItem(itemName, itemDueDate);
    setItemName("");
    setItemDueDate("");
  };

  return (
    <div className="row my-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo here"
          value={itemName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={itemDueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={hanleOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
