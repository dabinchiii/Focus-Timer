"use client";

import Image from "next/image";
import { Modak } from "next/font/google";

// react-circular-progressbar
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import TimerButton from "./TimerButton";

import { useState, useEffect } from "react";
import useTimer from "@/hooks/useTimer";
import SessionButton from "./SessionButton";

const modak = Modak({
  variable: "--font-modak",
  weight: "400",
  subsets: ["latin"],
});

const startIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/start.svg"}
    width={24}
    height={24}
    alt="start"
  />
);
const pauseIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/pause.svg"}
    width={24}
    height={24}
    alt="pause"
  />
);
const resetIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/reset.png"}
    width={40}
    height={40}
    alt="reset"
  />
);

type Session = "FOCUS_TIME" | "SHORT_BREAK" | "LONG_BREAK";

const Timer = (): React.ReactNode => {
  const [targetMinutes, setTargetMinutes] = useState<number>(25);
  const [selectedSession, setSelectedSession] = useState<Session>("FOCUS_TIME");

  const {
    timeLeft,
    formattedTimeLeft,
    // isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer({
    initialMinutes: targetMinutes,
    onFinish: () => {},
  });

  useEffect(() => {
    resetTimer(targetMinutes);
  }, [targetMinutes, resetTimer]);

  return (
    <>
      <div className="p-4 border flex flex-col gap-8 p-8 mx-auto w-[500px]">
        <CircularProgressbarWithChildren
          value={(timeLeft / (targetMinutes * 60)) * 100}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#FFFFFF",
            trailColor: `rgba(0, 0, 0, 0.3)`,
            backgroundColor: "#000000",
          })}
        >
          <div
            className={`${modak.className} font-modak text-white text-8xl [text-shadow:_0_10px_10px_rgb(0_0_0_/_0.25)] `}
          >
            {formattedTimeLeft}
          </div>
          <div className="flex gap-4">
            <TimerButton onClick={startTimer}>{startIcon}</TimerButton>
            <TimerButton onClick={pauseTimer}>{pauseIcon}</TimerButton>
            <TimerButton onClick={() => resetTimer()}>{resetIcon}</TimerButton>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="md:flex gap-8 m-4">
        <SessionButton
          title="Focus Time"
          sessionTime={25}
          isSelected={selectedSession === "FOCUS_TIME"}
          onSelected={setTargetMinutes}
          onClick={() => {
            setSelectedSession("FOCUS_TIME");
          }}
        />
        <SessionButton
          title="Short Break"
          sessionTime={5}
          isSelected={selectedSession === "SHORT_BREAK"}
          onSelected={setTargetMinutes}
          onClick={() => {
            setSelectedSession("SHORT_BREAK");
          }}
        />
        <SessionButton
          title="Long Break"
          sessionTime={15}
          isSelected={selectedSession === "LONG_BREAK"}
          onSelected={setTargetMinutes}
          onClick={() => {
            setSelectedSession("LONG_BREAK");
          }}
        />
      </div>
    </>
  );
};

export default Timer;
