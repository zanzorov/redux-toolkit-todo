import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todolist">
      {todos.map((todo, index) => (
        <TodoItem key={index} id={todo.id} title={todo.myTask} />
      ))}
    </div>
  );
}

export default TodoList;
