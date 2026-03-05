import React, { useState } from "react";
import axios from 'axios'
import ReactMarkdown from "react-markdown"
import Loading from "./Loading";

const App = () => {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState("")
  const [loadingStatus, setLoadingStatus] = useState(false)

  let handleSubmit=(e)=>{
    e.preventDefault();
    setLoadingStatus(true)

    axios.post(`http://localhost:7000/ask`,{question})
    .then((res)=>res.data)
    .then((finalRes)=>{
      console.log(finalRes)
      if(finalRes._status){
        setData(finalRes.finalData)
        setLoadingStatus(false)
      }
    })
    console.log(question)
  }
  return (
    <>
      <h2 className="max-w-330 mx-auto mt-3 bg-blue-950 text-center font-bold text-4xl">
        Gemini AI Chat Bot
      </h2>
      <div className="max-w-330 mx-auto border grid grid-cols-[30%_auto] gap-5 p-5">
        <form onSubmit={handleSubmit} className="shadow-lg p-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-50 border p-3"
          ></textarea>
          <button type="submit" className="bg-blue-950 font-semibold text-white w-full mt-1 hover:bg-blue-800 p-3 hover:rounded-lg">
            Generate Content
          </button>
        </form>

        <div className="border-l border-[#ccc]">
          <div className="h-73 overflow-y-scroll p-4">
          
         { loadingStatus ? <Loading/> :<ReactMarkdown>{data}</ReactMarkdown> }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
