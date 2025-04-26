import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="list">
      {todos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
