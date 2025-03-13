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
      className="border p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TimerButton;
