import './TodoItem.css';

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item){
    setTodos(todos.filter((todo)=>todo !== item));

  }
  return (
    <div className='item'>
      <div className='itemName'>
        {item.name}
        <span>
        <button onClick={()=>handleDelete(item)} className='deletButton'>x</button>
      </span>
        </div>
      <hr className='line'/>
      </div>
  );
};

export default TodoItem;
