import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row my-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteClick(todoName)}
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
