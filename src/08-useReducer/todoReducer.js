/**
 * It takes in an initial state and an action, and returns a new state based on the action type.
 *
 * The initial state is an empty array.
 *
 * The action is an object with a type and a payload.
 *
 * The type is a string that describes the action.
 *
 * The payload is the data that is passed to the reducer.
 *
 * The reducer returns a new state based on the action type.
 *
 * If the action type is "[TODO] Add todo", the reducer returns a new array with the payload added to
 * the end of the array.
 *
 * If the action type is anything else, the reducer returns the initial state.
 *
 * The reducer is a pure function.
 *
 * It doesn't mutate the state.
 *
 * It returns a new state.
 *
 * The reducer is
 * @param [initialState] - The initial state of the reducer.
 * @param action - {type: "[TODO] Add todo", payload: "Learn Redux"}
 * @returns The initialState is being returned.
 */
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...initialState, action.payload];
    case "[TODO] Remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
