import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import { QuizProvider } from "./context/quiz";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Header />
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
