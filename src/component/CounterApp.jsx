import React, { useState } from "react";
import Button from "./Button";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  console.log(count);
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
