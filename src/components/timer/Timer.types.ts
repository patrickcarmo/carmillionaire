import { Dispatch, SetStateAction } from "react";

export interface TimerProps {
  curiosityNumber: number;
  setTimeOut: Dispatch<SetStateAction<boolean>>
}