import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  //El useReducer se vincula con la funcion que se crea, se le pasa el estado inicial
  const [todos, dispatch] = useReducer(todoReducer, [], init); //Se vincula automaticamente

  //Controla que cada que hay una mutation en los todos se modifican los datos de localStorage
  /* A hook that is called every time the todos change. */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    //Creo una accion
    const action = { type: "[TODO] Add todo", payload: todo };
    //El dispatch con el reducer vinculado, manda el action y busca el tipo de la accion
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "[TODO] Remove todo", payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "[TODO] Toggle todo", payload: id });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
