import React, { useState } from 'react';
import { useTODO } from './useTODO';
import TodoItem from "./componentes/TodoItem.jsx";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodoCompleted } = useTODO([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodoClick = () => {
    addTodo({
      id: uuidv4(),
      text: newTodoText,
      completed: false,
    });
    setNewTodoText('');
  };

  const handleNewTodoChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>Total todos: {countTodos()}</p>
      <p>Pending todos: {countPendingTodos()}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodoCompleted}
            />
          </li>
        ))}
      </ul>
      <input type="text" value={newTodoText} onChange={handleNewTodoChange} />
      <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>
  );
}

export default App;