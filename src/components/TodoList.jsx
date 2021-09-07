import React, { useState } from 'react';
import '../sass/TodoList.scss';
import data from '../datas/data.json';

function TodoList() {
  const [todoList, setTodoList] = useState(data);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    todo && setTodoList([...todoList, todo]);
  };

  const handleDelTodo = (e) => {
    console.log(e);
  };

  return (
    <div className="todolist">
      <ul>
        {todoList &&
          todoList.map((todo, index) => (
            <li key={index} data-index={index} onSubmit={handleDelTodo}>
              {todo.task}
              <button type="submit" className="del-todo">
                ❌
              </button>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.task}
          onChange={(e) =>
            setTodo({
              id: todoList.length + 1,
              task: e.target.value,
              done: false,
            })
          }
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TodoList;
