import React, { useEffect, useState } from 'react';
import '../sass/TodoList.scss';

function TodoList() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });
  const [todo, setTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    todo &&
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, text: todo.trim() },
      ]);
    setTodo('');
  };

  const handleDeleteTodo = (id) => {
    const remainingTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(remainingTodos);
  };

  return (
    <div className="todolist">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <input type="submit" value="➕" />
      </form>

      <ul>
        {todoList &&
          todoList.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                className="del-todo"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                ❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
