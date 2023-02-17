import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

const initialForm = {
  name: "Wilmer",
  email: "wilmer@gmail.com",
};

describe("Pruebas en useForm", () => {
  test("Debe de regresar los valores por defecto", () => {
    /* Destructuring the result of the renderHook function. */
    const { result } = renderHook(() => useForm(initialForm));
    /* Checking that the result of the hook is equal to the object that is passed in. */
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Wilmer";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    /* A function that is used to wrap the code that you want to test. */
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe de realizar el reset del form", () => {
    const newValue = "Wilmer";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });
});
