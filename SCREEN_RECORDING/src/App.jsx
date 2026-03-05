import { Disc, Square } from "lucide-react";
import React, { useRef, useState } from "react";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])

const stopRecording=()=>{
  mediaRecorderRef.current.stop()
setIsRecording(false)
}
  

const startRecording= async ()=>{
try {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video:true,
    audio:true
  })

  const mediaRecorder= new MediaRecorder(stream)
  mediaRecorder.start()
  setIsRecording(true)
  mediaRecorderRef.current = mediaRecorder
  

  mediaRecorder.ondataavailable=(e)=>{
    if(e.data.size > 0){
      chunksRef.current.push(e.data)
    }
  }
  mediaRecorder.onstop=()=>{
    const blob = new Blob(chunksRef.current, {type:"video/mp4"})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url 
    a.download = "sample.mp4"
    a.click()
    chunksRef.current = []
  }

} catch (error) {
  alert(error.message)
}
}
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      {isRecording ? (
         <button onClick={stopRecording} className=" flex items-center gap-2 bg-rose-600 text-white font-semibold rounded-lg px-13 py-4 hover:bg-rose-500 transition duration-200 active:scale-80"> <Square className="w-4 h-4"/> Stop Recording</button>
      ) : (
        <button onClick={startRecording} className=" flex items-center gap-2 bg-blue-600 text-white font-semibold rounded-lg px-13 py-4 hover:bg-blue-500 transition duration-200 active:scale-80">
        <Disc className="w-4 h-4"/>
        Start Recording
        </button>
      )}
    </div>
  );
};

export default App;
