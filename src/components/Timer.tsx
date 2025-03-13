"use client";

import TimerButton from "./TimerButton";

import useTimer from "@/hooks/useTimer";

const Timer = (): React.ReactNode => {
  const {
    // timeLeft,
    formattedTimeLeft,
    // isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer({
    initialMinutes: 5,
    onFinish: () => {},
  });

  return (
    <div className="p-4 border flex flex-col gap-8 p-8 mx-auto w-[500px]">
      <div>{formattedTimeLeft}</div>
      <div>
        <TimerButton onClick={startTimer}>start</TimerButton>
        <TimerButton onClick={pauseTimer}>pause</TimerButton>
        <TimerButton onClick={() => resetTimer()}>reset</TimerButton>
      </div>
    </div>
  );
};

export default Timer;
