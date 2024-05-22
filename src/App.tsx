import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import { motion } from "framer-motion";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const choices = [
    {
      name: "scissors",
      image: "./images/icon-scissors.svg",
      color: "yellow",
    },
    {
      name: "spock",
      image: "./images/icon-spock.svg",
      color: "aqua",
    },
    {
      name: "paper",
      image: "./images/icon-paper.svg",
      color: "roy-blue",
    },
    {
      name: "lizard",
      image: "./images/icon-lizard.svg",
      color: "purplish",
    },
    {
      name: "rock",
      image: "./images/icon-rock.svg",
      color: "red",
    },
  ];
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [picked, setPicked] = useState<string>("");
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * choices.length)
  );

  const buttonClick = () => {
    setScore(score + 1);
  };
  const showModal = () => {
    setShowRules(!showRules);
  };
  const handleWhichBtnWasClicked = () => {
    setIsBtnClicked(!isBtnClicked);
  };


  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * choices.length));
  }, [isBtnClicked]);

  const [randomPick, setRandomPick] = useState(choices[randomIndex])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showModal={showModal}
              buttonClick={buttonClick}
              score={score}
              showRules={showRules}
              isBtnClicked={isBtnClicked}
              randomIndex={randomIndex}
              handleWhichBtnWasClicked={handleWhichBtnWasClicked}
              randomPick= {randomPick}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
