import "./TodoItem.css";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
const newArray = todos.map((todo) =>
  todo.name === name ? { ...todo, done: !todo.done } : todo
);
    setTodos(newArray)
  }

  const className = item.done ? "completed" : "";
  return (
    <div className="item">
      <div className="itemName">
        <span className = {className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button onClick={() => handleDelete(item)} className="deleteButton">
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
};

export default TodoItem;
