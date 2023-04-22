import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleToggleCompleted = () => {
    onToggle(todo.id);
  };

  const todoStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <div style={todoStyle}>
      <span onClick={handleToggleCompleted}>{todo.text}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItem;