import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  id?: string;
}

// reusable container and fixed width
const Container: React.FC<Props> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`${className} max-w-7xl mx-auto`}>
      {children}
    </section>
  );
};

export default Container;
