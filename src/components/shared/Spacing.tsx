interface Props {
  direction: "w" | "h";
  size: number;
}

const Spacing = ({ direction, size }: Props) => {
  return <div className={`${direction}-[${size}px]`} />;
};

export default Spacing;
