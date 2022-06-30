import React, { useContext } from "react";
import { QuizContest } from "../context/quiz";
import Answers from "./Answers";

const Questions = () => {
  //creating a state
  const [quizState, dispatch] = useContext(QuizContest);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  // console.log("questions", currentQuestion);

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => {
          return (
            <Answers
              answerText={answer}
              key={index.toString()}
              onSelectAnswer={(answerText) =>
                dispatch({ type: "SELECT_ANSWER", payload: answerText })
              }
              index={index}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
