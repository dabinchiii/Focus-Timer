import { useEffect } from "react";

interface SessionButtonProps {
  title: string;
  sessionTime: number;
  isSelected: boolean;
  onSelected: (m: number) => void;
  onClick: () => void;
}

const SessionButton = ({
  title,
  sessionTime,
  isSelected,
  onSelected,
  onClick,
}: SessionButtonProps): React.ReactNode => {
  useEffect(() => {
    if (isSelected) onSelected(sessionTime);
  }, [isSelected, onSelected, sessionTime]);

  return (
    <button onClick={onClick}>
      <div className={`${!isSelected || "bg-black text-white"}`}>
        <div>{title}</div>
        <div>
          <input className="border" defaultValue={sessionTime} readOnly />
          {" m"}
        </div>
      </div>
    </button>
  );
};

export default SessionButton;
