interface ChildrenProps {
  className: string;
}

const Skeleton = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const TextLg = ({ className }: ChildrenProps) => {
  return <div className={`${className} h-[20px] skeleton rounded-sm`}></div>;
};

const TextSm = ({ className }: ChildrenProps) => {
  return <div className={`${className} h-[15px] skeleton rounded-sm`}></div>;
};

const Circle = ({ className }: ChildrenProps) => {
  return <div className={`${className} skeleton rounded-full`}></div>;
};

const Square = ({ className }: ChildrenProps) => {
  return <div className={`${className} skeleton rounded-md`}></div>;
};

Skeleton.Circle = Circle;
Skeleton.Square = Square;
Skeleton.TextLg = TextLg;
Skeleton.TextSm = TextSm;

export default Skeleton;
