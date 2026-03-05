import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setColors([]);

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: 'user',
              content: `give me 5 hex colors for: ${prompt}`
            }
          ]
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            "Content-Type": "application/json",
          }
        }
      );

      const resultText = response.data.choices[0].message.content;
      const hexMatches = resultText.match(/#[A-Fa-f0-9]{6}/g);

      if (hexMatches) {
        setColors(hexMatches);
      } else {
        setColors(["#f87171", "#340599", "#ffffff"]);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <div className='bg-gray-800 min-h-screen text-white flex flex-col items-center justify-center px-4 py-10'>
      <h1 className='text-4xl font-bold mb-4'>Ai Color Palette</h1>
      <input 
        value={prompt}
        className='w-full max-w-md border p-3 rounded bg-gray-700 mb-4' 
        placeholder='Enter Your Brand / mood (e.g sun, Moon)'
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button 
        onClick={handleGenerate} 
        className='bg-green-500 text-white px-6 py-2 rounded font-bold hover:bg-green-700 '
      >
        {loading ? "Generating..." : "Generate Palette"}
      </button>

      {colors.length > 0 && (
        <div className='flex justify-center mt-10 gap-4'>
          {colors.map((color, idx) => (
            <div key={idx} className='flex flex-col items-center'>
              <div className='w-10 h-10 rounded' style={{ backgroundColor: color }}></div>
              <span>{color}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App;
