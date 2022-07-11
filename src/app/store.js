import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todolist/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
