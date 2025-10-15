import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
