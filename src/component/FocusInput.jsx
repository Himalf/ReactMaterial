import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef("Hello");

  const handleFocus = () => {
    console.log("Clicked ref value", inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
      console.log("is Focused ", document.activeElement === inputRef.current);
    }
  };

  console.log(handleFocus);

  return (
    <div className="p-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Click button to foicus"
        className="border p-2"
      />

      <button
        onClick={handleFocus}
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded focus:outline-none  focus:ring-2 focus:ring-blue-500"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
