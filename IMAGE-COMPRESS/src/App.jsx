import { Download, Plus } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [src, setSrc] = useState(null);

  const chooseImage = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setSrc(url);
  };

  const compressImage = () => {
    const image = new Image();
    image.src = src
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const page = canvas.getContext("2d");
      page.drawImage(image, 0, 0);
      const url = canvas.toDataURL("image/webp", 0.5); //medim quality 0.5 high is 0.1
      const a = document.createElement("a");
      a.href = url;
      a.download = "sample.webp";
      a.click();
    };
  };
  return (
    <div className="bg-gray-300 min-h-screen py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-7/12 mx-auto space-y-6">
        <h1 className="text-4xl font-semibold mb-4">Image Compressor</h1>

        {src && (
          <img src={src} className="w-full rounded-lg h-120 object-cover" />
        )}

        <button className=" relative bg-green-600 text-lg font-medium text-white px-16 py-3 rounded-lg hover:bg-green-700 transition duration-200 active:scale-80 flex items-center gap-1.5">
          {" "}
          <Plus /> Add Image
          <input
            type="file"
            accept="image/*"
            className=" absolute top-0 left-0 w-full h-full rounded-lg opacity-0"
            onChange={chooseImage}
          />
        </button>

        {src && (
          <button
            className=" relative bg-rose-600 text-lg font-medium text-white px-16 py-3 rounded-lg hover:bg-rose-700 transition duration-200 active:scale-80 flex items-center gap-1.5 "
            onClick={compressImage}
          >
            <Download />
            Compress and Download
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
