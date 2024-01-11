import { useCallback, useState } from "react";

const useInput = <T>(
  initialState: T
): [
  T,
  (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void,
  () => void
] => {
  const [value, setValue] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const initialize = useCallback(() => {
    setValue(initialState);
  }, [setValue, initialState]);

  return [value, onChange, initialize];
};

export default useInput;
