import { React } from "react";
import "./todo-list-item.css";
const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  important,
  done,
  onToggleDone,
}) => {
  let classNames = "todo-list-item";
  if (important) {
    classNames += " important";
  }

  if (done) {
    classNames += " done";
  }

  return (
    <div className="todo__list-item">
      <h2 onClick={onToggleDone} className={classNames}>
        {label}
      </h2>
      <button onClick={onToggleImportant}>imp</button>
      <button onClick={onDeleted}>del</button>
    </div>
  );
};
export default TodoListItem;
