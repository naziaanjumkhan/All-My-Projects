import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setQuestion("Loading...")
    let response = await axios({
      url: "AIzaSyBJSukF0FH88J3jni47JiF1GdO3objLkkY",
      method: "post",
      data: {
        contents: [{ parts: [{ text: "question" }] }],
      },
    });
    response(["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  return (
    <div>
      <div className="conatiner">
        <h1>Chat AI</h1>
        <textarea
          cols="30"
          rows="10"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask my anything"
        />
        <button onClick={generateAnswer()}>Generate Answer</button>
        <pre>{answer}</pre>
      </div>
    </div>
  );
};

export default App;
