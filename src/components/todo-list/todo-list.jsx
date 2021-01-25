import { React } from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
export default TodoList;
