// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // apne project ke hisaab se path correct rakho
  ],
  theme: {
    extend: {
      colors: {
        themeyellow: "#FFD700", // 👈 yaha apna color code daal do
      },
    },
  },
  plugins: [],
}
