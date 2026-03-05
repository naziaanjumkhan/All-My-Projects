import React, { useCallback, useState } from "react";
import "animate.css";
import { Upload } from "lucide-react";
import Cropper from "react-easy-crop";

const PHOTO_W = 413;
const PHOTO_H = 531;
const COLS = 4;
const ROWS = 2;
const App = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [pixels, setPixels] = useState(null);
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((_, pixels) => {
    setPixels(pixels);
  }, []);

  const generateImage = () => {
    try {
      const url = URL.createObjectURL(image);
      const img = new Image();
      img.src = url;
      img.onload = () => {
        //Generate Single Image
        const canvas = document.createElement("canvas");
        canvas.width = PHOTO_W;
        canvas.height = PHOTO_H;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffff";
        ctx.fillRect(0, 0, PHOTO_W, PHOTO_H);
        ctx.drawImage(
          img,
          pixels.x,
          pixels.y,
          pixels.width,
          pixels.height,
          0,
          0,
          PHOTO_W,
          PHOTO_H,
        );
        // const result = canvas.toDataURL("image/png")
        // console.log(result)

        //Set Single for 8 times
        const page = document.createElement("canvas");
        page.width = PHOTO_W * COLS;
        page.height = PHOTO_H * ROWS;
        const pageCtx = page.getContext("2d");
        pageCtx.fillStyle = "#fff";
        pageCtx.fillRect(0, 0, page.width, page.height);
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            pageCtx.drawImage(
              canvas,
              col * PHOTO_W,
              row * PHOTO_H,
              PHOTO_W,
              PHOTO_H,
            );
            pageCtx.strokeStyle = "#000";
            pageCtx.strokeRect(col * PHOTO_W, row * PHOTO_H, PHOTO_W, PHOTO_H);
          }
        }
        const a = document.createElement("a");
        a.href = page.toDataURL("image/png");
        a.download = "passport.png";
        a.click();
      };
    } catch (err) {
      console.log("Error - ", err.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      {/**--------- */}
      <div className="relative h-105 bg-black rounded-xl overflow-hidden max-w-xl mx-auto">
        {!image && (
          <div className="flex justify-center items-center h-full flex-col ">
            <Upload className=" w-12 h-12 text-white" />
            <h1 className="text-white text-xl">Choose an image</h1>
            <input
              type="file"
              accept="image/*"
              className="opacity-0 border border-red-500 absolute top-0 left-0 w-full h-full rounded-xl"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        )}

        {image && (
          <Cropper
            image={URL.createObjectURL(image)}
            aspect={35 / 45}
            crop={crop}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            zoom={zoom}
          />
        )}
      </div>
      {/**--------- */}
      <div className="flex justify-center mt-4">
        {image && (
          <div className="flex flex-col gap-4">
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
            />
            <button
              onClick={generateImage}
              className="bg-green-700 text-white font-semibold px-4 rounded active:scale-80 transition duration-300 hover:scale-105 hover:bg-green-900 p-4"
            >
              Generate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
