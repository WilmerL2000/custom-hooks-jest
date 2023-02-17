const initialSate = [
  {
    id: 1,
    todo: "Recolectar piedra del alma",
    done: false,
  },
];

// Reducer Funcion que recibe 2 arg y regresa un state
const todoReducer = (state = initialSate, action) => {
  return state;
};

const newTodo = {
  id: 2,
  todo: "Recolectar piedra del poder",
  done: false,
};
