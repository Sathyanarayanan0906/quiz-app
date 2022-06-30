import React, { useEffect } from "react";
import { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Questions from "./Questions";
import Results from "./Results";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContest);
  const apiURL =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986";
  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    }
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results })
      );
  });
  return (
    <div className="quiz">
      {!quizState.showResults && quizState.questions.length > 0 ? (
        <>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Questions />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </>
      ) : (
        <Results quizState={quizState} />
      )}
    </div>
  );
};

export default Quiz;
