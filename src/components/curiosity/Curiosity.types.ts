import { Dispatch, SetStateAction } from "react";


export interface CuriosityProps {
  question: Question[];
  curiosityNumber: number;
  setCuriosityNumber: Dispatch<SetStateAction<number>>;
  setTimeOut: (value: boolean) => void;
}

export interface Question {
  id: number;
  title: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  correct: boolean;
}