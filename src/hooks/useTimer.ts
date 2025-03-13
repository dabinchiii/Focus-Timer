import { useState, useEffect, useCallback } from "react";

interface TimerProps {
  initialMinutes: number;
  onFinish: () => void;
}

interface TimerReturn {
  timeLeft: number;
  formattedTimeLeft: string;
  isActive: boolean;
  isPaused: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: (minutes?: number) => void;
}

const useTimer = ({ initialMinutes, onFinish }: TimerProps): TimerReturn => {
  const [timeLeft, setTimeLeft] = useState<number>(initialMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const resetTimer = useCallback(
    (minutes?: number) => {
      setIsActive(false);
      setIsPaused(false);
      setTimeLeft((minutes ? minutes : initialMinutes) * 60);
    },
    [initialMinutes]
  );

  const handleFinish = useCallback(() => {
    setIsActive(false);
    resetTimer(initialMinutes); // TODO: 다음 세션으로 이동..
    onFinish();
  }, [onFinish, initialMinutes, resetTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft <= 0) {
      handleFinish();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, handleFinish]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const pauseTimer = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  return {
    timeLeft,
    formattedTimeLeft: formatTime(timeLeft),
    isActive,
    isPaused,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useTimer;
