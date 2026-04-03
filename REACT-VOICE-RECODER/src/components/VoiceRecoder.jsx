import React, { useEffect, useRef, useState } from "react";

const VoiceRecoder = () => {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [url, setUrl] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start(1000);
      setIsRecording(true);
      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/mp3" });
        const u = URL.createObjectURL(blob);
        setUrl(u);
        setIsRecording(false);
        chunksRef.current = [];
        stream.getTracks().forEach((track) => track.stop());
      };

      timeRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } catch (err) {
      console.log("Error -", err.message);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    clearInterval(timeRef.current);
  };

  const downloadAudio = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.download = "recording.mp3";
    a.click();
  };

  const formatDuration = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(Math.floor(t % 60)).padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from bg-indigo-500">
        <div className="animate__animated animate__slideInUp w-95 bg-white/19 backdrop-blur-xl rounded-3xl p-9 shadow-2xl border border-white/10">
          <h1 className="text-2xl font-bold text-center mb-6">
            🎤Voice Recorder
          </h1>
          <div className="text-center text-4xl font-mono mb-6 text-blck font-bold">
            {formatDuration(time)}
          </div>
          <div className="flex gap-4 justify-center mb-6">
            {isRecording ? (
              <button
                onClick={stopRecording}
                className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition duration-200 active:scale-80"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={startRecording}
                className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition duration-200 active:scale-80"
              >
                Start
              </button>
            )}
          </div>

          {url && (
            <div className="space-y-4">
              <audio src={url} controls className="w-full" />
              <button
                onClick={() => downloadAudio(url)}
                className=" text-white w-full py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 transition duration-300 active:scale-90"
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceRecoder;
