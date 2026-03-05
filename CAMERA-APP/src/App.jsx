import { Focus } from "lucide-react";
import React, { useEffect, useRef } from "react";

const App = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      if (!videoRef.current) return;
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (error) {
      console.log(error.message);
    }
  };

  const clickImage = () => {
    try {
      if (!videoRef.current) return;

      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "sample.png";
      a.click();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    startCamera();
  }, []);

  return (
    <div className="bg-slate-900 h-screen flex items-center justify-center">
      <div className="w-2xl rounded-2xl bg-slate-800 shadow-4xl py-6 px-8 space-y-4">
        <h1 className="text-white text-center text-4xl font-bold">
          My Webcam App
        </h1>
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-90 object-cover bg-black rounded-2xl"
        />

        <div className="flex justify-center ">
          <button
            onClick={clickImage}
            className=" active: scale-80 transition duration-200 bg-red-500 p-4 rounded-lg flex items-center text-white  font-medium text-xl gap-2"
          >
            <Focus className="w-8 h-8 text-white" />
            Click Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
