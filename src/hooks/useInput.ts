import { useState } from "react";

const useInput = <T>(
  initialState: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
] => {
  const [value, setValue] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChange];
};

export default useInput;
