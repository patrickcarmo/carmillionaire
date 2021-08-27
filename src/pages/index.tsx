import React, { useEffect, useMemo, useState } from "react";
import { Curiosity } from "../components/curiosity";
import { Question } from "../components/curiosity/Curiosity.types";
import { Start } from "../components/start";
import { Timer } from "../components/timer";

function App() {
  const [username, setUsername] = useState<string>('');
  const [timeOut, setTimeOut] = useState(false);
  const [curiosityNumber, setCuriosityNumber] = useState(1);
  const [earned, setEarned] = useState("€ 0");

  const data: Question[] = [
    {
      id: 1,
      title: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      title: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      title: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyBoard = useMemo(() =>
    [
      { id: 1, amount: "€ 100" },
      { id: 2, amount: "€ 200" },
      { id: 3, amount: "€ 300" },
      { id: 4, amount: "€ 500" },
      { id: 5, amount: "€ 1.000" },
      { id: 6, amount: "€ 2.000" },
      { id: 7, amount: "€ 5.000" },
      { id: 8, amount: "€ 10.000" },
      { id: 9, amount: "€ 20.000" },
      { id: 10, amount: "€ 30.000" },
      { id: 11, amount: "€ 50.000" },
      { id: 12, amount: "€ 100.000" },
      { id: 13, amount: "€ 200.000" },
      { id: 14, amount: "€ 500.000" },
      { id: 15, amount: "€ 1.000.000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    if (curiosityNumber > 1) {
      const currentCuriosity = curiosityNumber - 1;
      const valueErned = moneyBoard.find(mb => mb.id === currentCuriosity);
      if (valueErned) {
        setEarned(valueErned.amount);
      }
    }

  }, [curiosityNumber, moneyBoard]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      curiosityNumber={curiosityNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Curiosity
                    question={data}
                    curiosityNumber={curiosityNumber}
                    setCuriosityNumber={setCuriosityNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyBoard.map((mp) => (
                <li
                  key={mp.id}
                  className={
                    curiosityNumber === mp.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{mp.id}</span>
                  <span className="moneyListItemAmount">{mp.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;