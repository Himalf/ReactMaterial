import React from "react";
import Image from "../assets/image.png";
const Card = () => {
  const data = [
    {
      image: Image,
      title: "Title of the picture",
      description:
        "Creating a simple card component in React involves building a reusablefunctional component that can display different content using props. Youcan style it with plain CSS for a minimalist approach, which is idealfor beginners",
      button: "Learn More . .",
    },
    {
      image: Image,
      title: "Title of the picture",
      description:
        "Creating a simple card component in React involves building a reusablefunctional component that can display different content using props. Youcan style it with plain CSS for a minimalist approach, which is idealfor beginners",
      button: "Learn More . .",
    },
    {
      image: Image,
      title: "Title of the picture",
      description:
        "Creating a simple card component in React involves building a reusablefunctional component that can display different content using props. Youcan style it with plain CSS for a minimalist approach, which is idealfor beginners",
      button: "Learn More . .",
    },
  ];
  return (
    <div className="flex gap-3">
      {data.map((val, i) => {
        return (
          <div
            className="w-96 h-96 border-2 border-black rounded-md mx-auto"
            key={i}
          >
            <div className="mx-auto w-full">
              <img
                src={val.image}
                className="w-20 h-20 rounded-full mx-auto mt-2 p-3 "
              />
            </div>
            <div className="font-bold text-gray-600 text-xl my-3">
              {val.title}
            </div>
            <div className="text-sm mx-5">{val.description}</div>
            <div className="mt-20">
              <button className="border-2 border-red-300 rounded-md font-bold  p-3 ">
                {val.button}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
