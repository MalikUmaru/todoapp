import './TodoItem.css';

const TodoItem = ({ item }) => {
  return (
    <div className='item'>
      <div className='itemName'>
        {item}
        <span>
        <button className='deletButton'>x</button>
      </span>
        </div>
      <hr className='line'/>
      </div>
  );
};

export default TodoItem;
