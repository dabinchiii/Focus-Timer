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
    <button
      className="block cursor-pointer rounded-md border border-4 border-white"
      onClick={onClick}
    >
      <div
        className={`flex-col justify-center p-4 ${
          !isSelected || "bg-[#652424] text-white"
        }`}
      >
        <div>{title}</div>
        <div className="text-white text-4xl">
          <input
            defaultValue={sessionTime}
            readOnly
            className={`${
              isSelected || ""
            } w-20 bg-[rgba(0,0,0,0.5)] text-center focus:outline-none`}
          />
          {" m"}
        </div>
      </div>
    </button>
  );
};

export default SessionButton;
