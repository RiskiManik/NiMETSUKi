import { useState, useCallback } from "react";

export default function useStateWithValidation(validationFunc, initialState) {
  const [state, setState] = useState(initialState);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  );

  return [state, onChange, isValid];
}
