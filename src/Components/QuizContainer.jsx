import React, { useContext, useState } from "react";
import { QuestionList } from "../Store/QuestionStoreProvider";
import ShowQuestion from "./ShowQuestion";
import ShowScore from "./ShowScore";
import NextButton from "./NextButton";
import PlayAgainButton from "./PlayAgainButton";

function displayQuestions({ setbtnVisible }) {
  const [questionindex, setquestionindex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { Questions } = useContext(QuestionList);
  const { selectedCategory } = useContext(QuestionList);
  const [score, setScore] = useState(0);

  const filterQuestions = Questions.filter(
    (question) => question.category === selectedCategory
  );

  return (
    <div className="bg-[#f5f5f5] w-[35rem] mt-14 max-sm:mt-5 rounded-lg drop-shadow-xl flex flex-col justify-center items-start p-6 max-xl:w-[30rem] max-lg:w-[28rem] max-sm:w-[90vw] max-xl:mt-6 max-xl:py-4">
      {questionindex < filterQuestions.length && (
        <ShowQuestion
          questionindex={questionindex}
          filterQuestions={filterQuestions}
          selectedCategory={selectedCategory}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          setScore={setScore}
          score={score}
          setquestionindex={setquestionindex}
        />
      )}
      {questionindex === filterQuestions.length && (
        <ShowScore filterQuestions={filterQuestions} score={score} />
      )}
      <div className="w-full flex justify-center items-center mt-2">
        {questionindex < filterQuestions.length ? (
          <NextButton
            setquestionindex={setquestionindex}
            questionindex={questionindex}
          />
        ) : (
          <PlayAgainButton setbtnVisible={setbtnVisible} />
        )}
      </div>
    </div>
  );
}

export default displayQuestions;
