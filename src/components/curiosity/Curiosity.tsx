import { useEffect, useState } from "react";
import useSound from "use-sound";
import { Answer, CuriosityProps as Props, Question } from "./Curiosity.types";

export const Curiosity: React.FC<Props> = ({
  question,
  curiosityNumber,
  setCuriosityNumber,
  setTimeOut,
}) => {
  const [curiosity, setCuriosity] = useState<Question>();
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound('sounds/play.mp3');
  const [correctAnswer] = useSound('sounds/correct.mp3');
  const [wrongAnswer] = useSound('sounds/wrong.mp3');

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    if (!question) return;
    setCuriosity(question[curiosityNumber - 1]);
  }, [question, curiosityNumber]);

  const delay = (duration: any, callback: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer: Answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(1500, () => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(1000, () => {
          setCuriosityNumber((previous: number) => previous + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    })
  };
  return (
    <>
      {curiosity && (
        <div className="question">
          <div className="title">{curiosity.title}</div>
          <div className="answers">
            {curiosity.answers.map((answer) => (
              <div key={answer.text}
                className={selectedAnswer === answer ? className : "answer"}
                onClick={() => !selectedAnswer && handleClick(answer)}
              >
                {answer.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}