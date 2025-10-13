import React, { useState } from "react";

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {/* {5 > 2 ? "greater" : "less"} */}
        {isVisible ? "Hide " : "Show "}
        Text
      </button>
      {/* <p>{isVisible && <p>This is some Hidden text</p>}</p> */}
      {isVisible ? <p>It is Visible text</p> : <p>Hidden</p>}
    </div>
  );
};

export default ShowHideText;
