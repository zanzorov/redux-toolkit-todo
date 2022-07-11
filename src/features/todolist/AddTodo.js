import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function AddTodo() {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();

  const handleCLickAdd = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("type a new todo");
      setNewTask("");
      return;
    }

    dispatch(
      addTodo({
        task: newTask,
      })
    );
    setNewTask("");
  };
  return (
    <div className="add__form">
      <input
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        type="text"
      />
      <button onClick={handleCLickAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
