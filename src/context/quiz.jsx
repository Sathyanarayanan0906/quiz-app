import { createContext, useReducer } from "react";
import { normalizeQuesions } from "../helper";
import { shuffleAnswers } from "../helper";

const initialState = {
  // its an simple object
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  //   answers: shuffleAnswers(data[0]),
  answers: [],
  currentAnswer: "",
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      //   console.log("Reducer", state, action);
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        //return an object
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "LOADED_QUESTIONS": {
      const normalizedQuesions = normalizeQuesions(action.payload);
      console.log("step ", state, action);
      return {
        ...state,
        questions: normalizedQuesions,
        answers: shuffleAnswers(normalizedQuesions[0]),
      };
    }
    default: {
      return state;
    }
  }
};

export const QuizContest = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContest.Provider value={value}>{children}</QuizContest.Provider>;
};
