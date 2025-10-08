import React from "react";

const Button = ({ buttonName, color }) => {
  return (
    <div>
      <button className={`text-white text-sm px-4 py-1 ${color} `}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
