import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    addTodo({ todo: trimmedTodo, completed: false, createdAt: new Date().toISOString() });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex flex-col items-center w-full gap-3 sm:flex-row"
      aria-label="Add new todo form"
    >
      <input
        type="text"
        placeholder="Write your next task..."
        className="flex-1 w-full px-4 py-2 text-gray-800 transition border border-gray-300 shadow-sm rounded-xl bg-white/90 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        aria-label="New todo"
      />
      <button
        type="submit"
        disabled={!todo.trim()}
        className={`w-full px-6 py-2 font-medium text-white transition bg-indigo-600 shadow-md sm:w-auto rounded-xl hover:bg-indigo-700 focus:ring focus:ring-indigo-300 ${
          !todo.trim() ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-disabled={!todo.trim()}
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
