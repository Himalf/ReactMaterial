import React, { useState } from "react";

const LoginToggle = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <h1>{loggedIn ? "welcome back" : "please login"}</h1>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
        }}
      >
        {loggedIn ? "logout" : "login"}
      </button>
    </div>
  );
};

export default LoginToggle;
