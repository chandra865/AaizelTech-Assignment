import React from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
        <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
