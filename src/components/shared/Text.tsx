interface Props {
  children: string;
  size?: "base" | "lg" | "xl";
  color?: "gray-500" | "gray-300";
}

const Text = ({ children, size = "base", color }: Props) => {
  return (
    <p className={`text-${size} ${color ? `text-${color}` : ""}`}>{children}</p>
  );
};

export default Text;
