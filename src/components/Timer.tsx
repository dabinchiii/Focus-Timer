import TimerButton from "./TimerButton";

const Timer = () => {
  const timeLeft = "03:00";
  return (
    <div className="p-4 border flex flex-col gap-8 p-8 mx-auto w-[500px]">
      <div>{timeLeft}</div>
      <div>
        <TimerButton>start</TimerButton>
        <TimerButton>pause</TimerButton>
        <TimerButton>reset</TimerButton>
      </div>
    </div>
  );
};

export default Timer;
