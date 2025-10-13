import React, { useRef, useState } from "react";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Timer :{seconds} s</h2>
      <div className="space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerApp;
