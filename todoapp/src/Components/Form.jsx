import './Form.css';
import { useState } from "react";       
const Form = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("");
   
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <div className='inputContainer'>
        <input className='modernInput'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder='Enter todo item...'
      />
      <button className='modernButton' type="submit">Add</button>

        </div>
          </form>
  );
};

export default Form;
