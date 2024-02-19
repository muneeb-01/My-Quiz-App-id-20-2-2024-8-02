import React from "react";

function Buttons({ questionindex, setquestionindex }) {
  return (
    <>
      <button
        onClick={() => {
          setquestionindex(questionindex + 1);
        }}
        className="text-white bg-[#242948] px-12 py-2 border-2 font-medium transition-all hover:border-[#242948] border-stone-300 hover:bg-transparent hover:text-[#242948] max-sm:text-[0.8rem] max-sm:px-9 max-sm:py-2 rounded-lg"
      >
        Next
      </button>
    </>
  );
}

export default Buttons;
