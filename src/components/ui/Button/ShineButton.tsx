interface Props {
  text: string;
  animation: boolean;
  onClick?: () => void;
}

const ShineButton: React.FC<Props> = ({ text, animation, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-10 md:h-12 ${
        animation ? "animate-shimmer" : ""
      } items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none uppercase font-outfit`}
    >
      {text}
    </button>
  );
};

export default ShineButton;
