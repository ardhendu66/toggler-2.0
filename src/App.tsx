import { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={() => setClicked(p => !p)}
        aria-pressed={clicked}
        className="relative w-30 h-15 p-1 rounded-4xl border border-sky-100 flex items-center cursor-pointer transition-colors duration-300 bg-sky-300"
      >
        <div className={`absolute inset-0 rounded-4xl transition-colors duration-300 ${clicked ? "bg-sky-600" : "bg-sky-300"}`} />
        <div
          className={`relative z-10 left-1 w-[50px] h-[50px] rounded-full bg-white shadow transform transition-transform duration-300 ease-in-out ${clicked ? "translate-x-[55px]" : "translate-x-[-3px]"}`}
        ></div>
      </button>
    </div>
  );
}