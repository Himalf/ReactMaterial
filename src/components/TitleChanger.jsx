import React, { useEffect, useState } from "react";

const TitleChanger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("Clicked");
  }, [count]);
  return (
    <div>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default TitleChanger;
