import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="dark:bg-gray-700 pl-3 w-full h-[40px] shadow-sm border-[1px] rounded-md focus:outline-none dark:text-white"
      {...props}
    />
  );
};

export default Input;
