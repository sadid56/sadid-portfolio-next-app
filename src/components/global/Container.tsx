import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  id?: string;
}

// reusable container and fixed width
const Container: React.FC<Props> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={cn("max-w-[1356px] px-4 mx-auto", className)}>
      {children}
    </section>
  );
};

export default Container;
