import { screen, render, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

/* Mocking the useFetch hook. */
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  /* Creating a mock function. */
  const mockIncrement = jest.fn();
  //Permite que se aplique en todos los test sin necesidad de declarar 1x1
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  /* Clearing all the mocks before each test. */
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    /* Mocking the useFetch hook.  Para emplear el hook y simular datos y demas emplea mook*/
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un quote", () => {
    /* Mocking the useFetch hook. */
    useFetch.mockReturnValue({
      data: [{ author: "Wilmer", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    /* Getting the button with the name "Next quote". */
    const nextButton = screen.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Wilmer", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    /* Simulating a click on the button. */
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
