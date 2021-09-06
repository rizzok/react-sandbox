import React, { useState } from 'react';
import '../sass/TodoList.scss';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo('');
  };

  return (
    <div className="todolist">
      <ul>{todoList && todoList.map((todo) => <li>{todo}</li>)}</ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TodoList;
