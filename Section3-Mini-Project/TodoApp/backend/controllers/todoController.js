import { TodoModel } from "../models/todoModel.js";

export const getTodos = (req, res) => {
  res.json(TodoModel.getAll());
};

export const addTodo = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Text is required" });
  const todo = TodoModel.add(text);
  res.status(201).json(todo);
};

export const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  TodoModel.delete(id);
  res.json({ message: "Deleted successfully" });
};

export const toggleTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = TodoModel.toggleComplete(id);
  if (!updated) return res.status(404).json({ message: "Todo not found" });
  res.json(updated);
};
