let todos = [];
let idCounter = 1;

export const TodoModel = {
  getAll: () => todos,
  add: (text) => {
    const todo = { id: idCounter++, text, completed: false };
    todos.push(todo);
    return todo;
  },
  delete: (id) => {
    todos = todos.filter((t) => t.id !== id);
  },
  toggleComplete: (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
    return todo;
  },
};
