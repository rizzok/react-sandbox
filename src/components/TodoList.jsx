import React, { useEffect, useState } from 'react';
import '../sass/TodoList.scss';
import AddTodoForm from './AddTodoForm';
import EditForm from './EditForm';
import TodoItem from './TodoItem';

function TodoList() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });
  const [todo, setTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    todo &&
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, text: todo.trim() },
      ]);
    setTodo('');
  };

  function handleDeleteTodo(id) {
    const remainingTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(remainingTodos);
  }

  function handleModifyTodo(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todoList.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodoList(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  return (
    <div className="todolist">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          onSubmit={handleEditFormSubmit}
          onChange={handleEditInputChange}
          setIsEditing={setIsEditing}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onSubmit={handleAddFormSubmit}
          onChange={handleAddInputChange}
        />
      )}

      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditClick={handleModifyTodo}
            onDeleteClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
