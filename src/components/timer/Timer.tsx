import { useEffect, useState } from "react";
import { TimerProps as Props } from "./Timer.types";

export const Timer = ({ setTimeOut, curiosityNumber }: Props) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [curiosityNumber]);
  return <>{timer}</>;
}