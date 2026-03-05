import React, { useState } from "react";
import Timer from "./component/Timer";
import Questions from "./component/Questions";
import Result from "./component/Result";

const App = () => {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="app-container">
      {!isOver ? (
        <>
          <Timer setIsOver={setIsOver} />
          <Questions setIsOver={setIsOver} setScore={setScore} />
        </>
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default App;
