import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    console.log("component mounted");
  }, []);

  return <div>useeffect exampl</div>;
};

export default Timer;
