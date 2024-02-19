import React from "react";

function Questions({
  questionindex,
  filterQuestions,
  selectedCategory,
  selectedAnswer,
  setSelectedAnswer,
  score,
  setScore,
  setquestionindex,
}) {
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 5);
    }
    setquestionindex(questionindex + 1);
  };

  return (
    <>
      <h1 className="text-[2rem] font-semibold text-[#242948] border-b-2 w-full p-3 border-gray-300 max-sm:text-[1.4rem] ">
        {selectedCategory} Quiz
      </h1>
      <h3 className="text-[#242948] ml-3 mt-4 text-[1.22rem] max-sm:text-[0.9rem] font-medium text-wrap">
        <span className="text-[#242948]">{questionindex + 1}. </span>
        {filterQuestions[questionindex].Question + "?"}
      </h3>
      <div className="flex justify-center items-center w-full flex-col gap-4 py-4 px-3 max-sm:px-1 max-sm:gap-2">
        {filterQuestions[questionindex].answers.map((answer) => {
          return (
            <button
              onClick={() => {
                handleAnswerClick(answer);
              }}
              key={answer.text}
              className={`${
                selectedAnswer === answer &&
                answer.correct &&
                "bg-green-500 text-white"
              } ${
                selectedAnswer === answer &&
                !answer.correct &&
                "bg-red-500 text-white"
              } w-full text-[#242948] bg-transparent border-2 rounded-md font-medium text-start px-6 py-3  border-stone-300 transition text-[1rem] max-sm:px-3 max-sm:py-2 max-sm:border max-sm:text-[0.9rem]`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Questions;
