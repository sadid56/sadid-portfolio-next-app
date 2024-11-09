import Link from "next/link";

interface Props {
  text: string;
  onClick?: () => void;
  url?: string;
}

const ShineButton: React.FC<Props> = ({ text, onClick, url }) => {
  return (
    <Link
      href={url ? url : ""}
      target="_blank"
      onClick={onClick}
      className={`
        inline-flex h-10 md:h-[44px] items-center justify-center rounded-md
        bg-[linear-gradient(320deg,#55065e,80%,#043d53)]
        bg-[length:200%_100%]
        px-4 font-medium text-slate-200 transition-all duration-500
        focus:outline-none uppercase font-outfit
        hover:bg-[linear-gradient(320deg,#043d53,50%,#55065e)]
       hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]

      `}
    >
      {text}
    </Link>
  );
};

export default ShineButton;
