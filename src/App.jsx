import { useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import QuestionStoreProvider from "./Store/QuestionStoreProvider";
import DisplayQuestions from "./Components/displayQuestions";
function App() {
  const [btnVisible, setbtnVisible] = useState(true);
  return (
    <QuestionStoreProvider>
      <div className="flex flex-col justify-start h-screen w-full items-center bg-[#d1bea8]">
        <Header />
        {btnVisible ? (
          <Category setbtnVisible={setbtnVisible} />
        ) : (
          <DisplayQuestions setbtnVisible={setbtnVisible} />
        )}
      </div>
    </QuestionStoreProvider>
  );
}

export default App;
