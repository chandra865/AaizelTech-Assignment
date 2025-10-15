import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // optional if needed
      });
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Add todo
  const addTodo = async (text) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/todos/add",
        { text },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTodos((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/delete/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // Toggle complete
  const toggleTodo = async (id) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/todos/toggle/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTodos((prev) => prev.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
