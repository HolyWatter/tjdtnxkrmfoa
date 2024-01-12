interface Props {
  children: string;
  bold?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  color?: "gray-500" | "gray-300" | "white";
}

const Text = ({ children, size = "base", color, bold }: Props) => {
  return (
    <p
      className={`text-${size} ${color ? `text-${color}` : ""} ${
        bold ? "font-bold" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
