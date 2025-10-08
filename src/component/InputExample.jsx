import { useState } from "react";

const InputExample = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border p-2"
        placeholder="type something..."
      />
      <p className="mt-2">you typed: {text}</p>
    </div>
  );
};

export default InputExample;
