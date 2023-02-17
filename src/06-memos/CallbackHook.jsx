import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /* A function that is being called by the child component. Memorized function*/
  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  //   const incrementFather = () => setCounter(counter + 1);
  return (
    <>
      <h1>
        useCallback Hook: <small>{counter}</small>{" "}
      </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
