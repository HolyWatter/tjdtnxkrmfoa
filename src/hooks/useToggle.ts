import { useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, handleToggle];
};

export default useToggle;
