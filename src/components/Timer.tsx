"use client";

import { Modak } from "next/font/google";

import TimerButton from "./TimerButton";

import useTimer from "@/hooks/useTimer";

const modak = Modak({
  variable: "--font-modak",
  weight: "400",
  subsets: ["latin"],
});

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
      <div
        className={`${modak.className} font-modak text-white text-8xl [text-shadow:_0_10px_10px_rgb(0_0_0_/_0.25)] `}
      >
        {formattedTimeLeft}
      </div>
      <div>
        <TimerButton onClick={startTimer}>start</TimerButton>
        <TimerButton onClick={pauseTimer}>pause</TimerButton>
        <TimerButton onClick={() => resetTimer()}>reset</TimerButton>
      </div>
    </div>
  );
};

export default Timer;
