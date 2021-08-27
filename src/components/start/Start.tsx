import React, { MutableRefObject } from "react";
import { useRef } from "react";
import { StartProps as Props } from "./Start.types";

export const Start: React.FC<Props> = ({ setUsername }) => {

  const inputStartref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    inputStartref?.current?.value && setUsername(inputStartref.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputStartref}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}