import React from "react";
import { useContext } from "react";
import { QuizContest } from "../context/quiz";
const Results = (props) => {
  const [quizState, dispatch] = useContext(QuizContest);
  //   console.log("Answer ka booss ", quizState);
  return (
    <div className="results">
      <div className="congratulations">Congratulation!</div>
      <div className="results-info">
        <div>You have Completed the Quiz!</div>
        <div>
          You have got {quizState.correctAnswersCount} of{" "}
          {props.quizState.questions.length}
        </div>
      </div>
      <div
        className="next-button"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        Restart
      </div>
    </div>
  );
};

export default Results;
