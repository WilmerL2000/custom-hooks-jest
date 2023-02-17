import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en useReducer", () => {
  const initialState = {
    id: 1,
    description: "Demo todo",
    done: false,
  };

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add todo",
      payload: {
        id: 2,
        description: "New todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
});
