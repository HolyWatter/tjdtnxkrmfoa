interface Props {
  direction?: "flex-col" | "flex-row";
  justify?:
    | "justify-center"
    | "justify-between"
    | "justify-start"
    | "justify-end"
    | "justify-around"
    | "justify-evenly"
    | "";
  align?: "items-start" | "items-end" | "items-center" | "";
  children: React.ReactNode;
}

const Flex = ({
  children,
  direction = "flex-row",
  justify = "",
  align = "",
}: Props) => {
  return (
    <div className={`flex ${direction} ${justify} ${align}`}>{children}</div>
  );
};

export default Flex;
