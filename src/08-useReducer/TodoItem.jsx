import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between "
        onClick={() => onToggleTodo(todo.id)}
      >
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.description}
        </span>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
