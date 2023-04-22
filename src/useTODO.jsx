import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function useTODO(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodoCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return { todos, addTodo, deleteTodo, toggleTodoCompleted };
}