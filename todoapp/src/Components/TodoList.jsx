import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
