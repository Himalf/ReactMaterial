import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
