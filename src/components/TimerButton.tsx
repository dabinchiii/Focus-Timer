interface TimerButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const TimerButton = ({
  children,
  onClick,
}: TimerButtonProps): React.ReactNode => {
  return (
    <button
      className="flex justify-center items-center cursor-pointer w-16 h-16 bg-white rounded-full shadow-md hover:bg-stone-100 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TimerButton;
