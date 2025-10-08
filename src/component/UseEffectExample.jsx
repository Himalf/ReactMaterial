import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `COUNT :${count}`;
    console.log(count);
  }, [count]); // runs only when count changes
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default UseEffectExample;
