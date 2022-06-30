//! function for shuffling my asnwers

export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuesions = (backendQuesions) => {
  return backendQuesions.map((backendQuesion) => {
    const incorrectAnswers = backendQuesion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuesion.correct_answer),
      question: decodeURIComponent(backendQuesion.question),
      incorrectAnswers,
    };
  });
};
