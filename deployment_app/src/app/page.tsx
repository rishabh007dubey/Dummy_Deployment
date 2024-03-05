"use client"
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="h-screen w-screen bg-[crimson] flex flex-col items-center justify-center">
      <div className="p-5 min-w-[30%] bg-white shadow-sm rounded-lg flex flex-col items-center justify-center gap-3">
        <h1 className="text-center text-5xl font-[cursive] font-extrabold">Counter Here</h1>
        <h1 className="text-center text-4xl font-extrabold text-blue-800">{counter}</h1>
        <div>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => setCounter(counter + 1)}>Increment</button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
