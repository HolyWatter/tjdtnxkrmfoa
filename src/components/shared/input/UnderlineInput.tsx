import { InputHTMLAttributes } from "react";

const UnderLineInput = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      {...props}
      className="border-border focus:outline-none pl-2 h-[40px] bg-bg border-b-2 w-full dark:border-gray-300 dark:bg-slate-800"
    />
  );
};

export default UnderLineInput;
