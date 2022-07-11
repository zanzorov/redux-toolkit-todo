import React from "react";
import AddTodo from "./features/todolist/AddTodo";
import TodoList from "./features/todolist/TodoList";

function App() {
  return (
    <div className="app">
      <header>Redux Toolkit Todo List</header>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
