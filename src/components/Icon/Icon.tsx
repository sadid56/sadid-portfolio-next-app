
interface Props {
  Icon: any;
  widht: number;
}
const Icon: React.FC<Props> = ({ Icon, widht }) => {
  
  return (
    <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary text-white hover:text-slate-800 flex items-center justify-center w-7 h-7 rounded-full p-1">
      <Icon strokeWidth={widht} />
    </div>
  );
};

export default Icon;
