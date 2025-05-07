import "./Form.css";
import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: e.target.value, done: false });
  }
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="inputContainer">
        
        <input
          className="modernInput"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className="modernButton" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
