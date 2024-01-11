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
  gap?: number;
}

const Flex = ({
  children,
  direction = "flex-row",
  justify = "",
  align = "",
  gap,
}: Props) => {
  return (
    <div className={`flex w-full ${direction} ${justify} ${align} gap-${gap}`}>
      {children}
    </div>
  );
};

export default Flex;
