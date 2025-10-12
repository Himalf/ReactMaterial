import React, { useState } from "react";

const NameForm = () => {
  // 1. create a state variable called name
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Enter you Name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="eg. John Doe"
      />

      <p>YOur name is :{name}</p>
    </div>
  );
};

export default NameForm;
