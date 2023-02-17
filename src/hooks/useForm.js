import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  /**
   * It takes an event object as an argument, and then it uses the event object to get the name and
   * value of the input that was changed. Then it uses the spread operator to copy the current state of
   * the form, and then it updates the value of the input that was changed
   */
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
