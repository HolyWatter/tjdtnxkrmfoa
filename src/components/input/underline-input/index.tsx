interface Props {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const UnderLineInput = ({ name, value, onChange, placeholder }: Props) => {
  return (
    <input
      type="text"
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className="border-border focus:outline-none pl-2 h-[40px] bg-bg border-b-2 w-full dark:border-gray-300 dark:bg-slate-800"
    />
  );
};

export default UnderLineInput;
