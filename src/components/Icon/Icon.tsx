
interface Props{
  Icon: any,
  widht: number
}
const Icon:React.FC<Props> = ({Icon, widht}) => {
  return (
    <button className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full"><Icon strokeWidth={widht}/></button>
  );
};

export default Icon;