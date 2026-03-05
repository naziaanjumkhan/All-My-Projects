import { jsPDF } from "jspdf";
import { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");
  const readFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setContent(reader.result);
    };
  };

  const generatePdf = () => {
    if (content === "") {
      alert("Text box is empty");
      return;
    }
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(content, 180);
    doc.text(lines, 15, 20);
    const id = uuid();
    doc.save(`${id}.pdf`);
  };

  return (
    <div className="bg-gray-400 h-screen flex items-center justify-center">
      <div className="w-6/12 bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
        <h2 className="text-4xl font-bold mb-4">Text to PDF Converter 🗃️</h2>
        <input
          type="file"
          accept=".txt"
          className="border p-3 rounded-lg border-gray-300 font-medium bg-purple-500 text-white w-fit"
          placeholder="Choose file"
          onChange={readFile}
        />
        <textarea
          value={content}
          rows={10}
          className="border border-gray-300 rounded-lg p-6"
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={generatePdf}
          className="px-8 py-3 rounded-lg text-white font-medium bg-purple-500 hover:bg-purple-600 active:scale-80 transition duration-300"
        >
          Convert Pdf
        </button>
      </div>
    </div>
  );
};

export default App;
