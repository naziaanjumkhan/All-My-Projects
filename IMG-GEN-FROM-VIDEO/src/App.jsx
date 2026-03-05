import { GalleryHorizontal, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [src, setSrc] = useState(null);
  const videoRef = useRef(null);

  const addVideo = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setSrc(url);
  };

  const captureVideoFrame = () => {
    try {
      const video = videoRef.current;
      if (!video) return;
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
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.controls = true;
    video.load();
    video.play();
  }, [src]);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-12 w-7/12 space-y-5">
        <video
        poster="/poster.jpg"
          ref={videoRef}        
          crossOrigin="anonymous"
          className="w-full rounded-2xl"
          src={src}
        />
        <div className="flex items-center gap-4">
          <button className=" relative bg-emerald-400 text-black font-semibold  px-12 rounded-lg py-3 flex items-center gap-1 hover:bg-emerald-300 transition duration-300 active:scale-80">
            <Plus />
            Choose video
            <input
              type="file"
              accept="video/*"
              className="absolute top-0 left-0 opacity-0 w-full h-full rounded-lg"
              onChange={addVideo}
            />
          </button>

          <button
            onClick={captureVideoFrame}
            className="bg-amber-400 text-black font-semibold  px-12 rounded-lg py-3 flex items-center gap-1 hover:bg-amber-300 transition duration-300 active:scale-80"
          >
            <GalleryHorizontal />
            Download current frame
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
