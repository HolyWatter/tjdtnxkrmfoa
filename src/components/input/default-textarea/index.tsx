interface Props {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea = ({ name, value, onChange, placeholder }: Props) => {
  return (
    <textarea
      className="dark:bg-gray-700 pl-3 py-1 w-full h-[100px] shadow-sm border-2 rounded-md focus:outline-none resize-none"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
