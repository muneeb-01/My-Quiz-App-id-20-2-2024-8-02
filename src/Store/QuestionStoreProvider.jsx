import { createContext, useState } from "react";
import { Questions } from "./Data";

export const QuestionList = createContext({});

function QuestionStoreProvider({ children }) {
  const [selectedCategory, setselectedCategory] = useState("General Knowledge");

  return (
    <QuestionList.Provider
      value={{ Questions, selectedCategory, setselectedCategory }}
    >
      {children}
    </QuestionList.Provider>
  );
}

export default QuestionStoreProvider;
