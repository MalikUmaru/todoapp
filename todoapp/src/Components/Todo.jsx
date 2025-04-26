import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Todo;
