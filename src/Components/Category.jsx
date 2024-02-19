import React, { useContext } from "react";
import { QuestionList } from "../Store/QuestionStoreProvider";
import { handleSelectedCategory } from "../Store/Function";

function Category({ setbtnVisible }) {
  // taking questions from Store
  const { Questions } = useContext(QuestionList);

  // Selecting Subject
  const { setselectedCategory } = useContext(QuestionList);

  // Filtering all category from existing data
  const filterCategory = Questions.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  //Which category selected by the user

  return (
    <div className="w-[80vw] p-[2vw]">
      <p className="text-[#4e4236] my-2 font-medium cursor-none text-xl">
        Choose your Subject:
      </p>
      <ul className="ml-3 max-sm:ml-0 gap-6 h-[3vw] w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {filterCategory.map((category, idx) => {
          return (
            <li
              key={idx}
              className="bg-[#a04a24] text-[1rem] text-nowrap border-2 border-transparent cursor-pointer text-center m-1 py-3 rounded-lg shadow-xl font-semibold hover:border-2 hover:border-[#4e4236] hover:bg-[#f5f5f5] hover:text-[#a04a24] transition"
            >
              <button
                onClick={() => {
                  handleSelectedCategory(
                    category,
                    setbtnVisible,
                    setselectedCategory
                  );
                }}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
