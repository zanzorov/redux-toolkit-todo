import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

function TodoItem({ id, title }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <div className="todo">
      <div className="todo__text">{title}</div>
      <div className="delete__block">
        <button onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
