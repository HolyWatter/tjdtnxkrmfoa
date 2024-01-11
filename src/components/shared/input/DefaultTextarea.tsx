import { TextareaHTMLAttributes } from "react";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className="dark:bg-gray-700 pl-3 py-1 w-full h-[100px] shadow-sm border-[1px] rounded-md focus:outline-none resize-none"
      {...props}
    />
  );
};

export default TextArea;
