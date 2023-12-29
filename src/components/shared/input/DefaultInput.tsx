interface Props {
  name?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ name, value, onChange, placeholder, type }: Props) => {
  return (
    <input
      type={type}
      className="dark:bg-gray-700 pl-3 w-full h-[40px] shadow-sm border-2 rounded-md focus:outline-none dark:text-white"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
