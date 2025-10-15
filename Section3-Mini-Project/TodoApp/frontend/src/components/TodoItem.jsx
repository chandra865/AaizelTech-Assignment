import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useTodos();

  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-md">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        x
      </button>
    </li>
  );
}
