function AddTodo() {
  return (
    <div class="row my-row">
      <div class="col-6">
        <input type="text" placeholder="Enter Todo here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
