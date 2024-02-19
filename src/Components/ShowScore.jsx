import React from "react";

function ShowScore({ score, filterQuestions }) {
  return (
    <>
      <h1 className="text-[1.8rem] max-sm:text-[1.3rem] font-semibold text-[#242948] border-b-2 w-full p-3 border-gray-300">
        Final Score
      </h1>
      <p className="text-[#242948] ml-3 mt-4 text-[1.1rem] max-sm:text-[0.8rem] font-normal">
        Right Answer's {score / 5}/{filterQuestions.length}
      </p>
      <h3 className="text-[#242948] ml-3 mt-4 text-[1.1rem] max-sm:text-[0.8rem] font-medium">
        Your Final scrore is : {score}
      </h3>
    </>
  );
}

export default ShowScore;
