const Cards = ({ title, description, imageurl }) => {
  return (
    <div className="border rounded-lg shadowp-4 max-w-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Cards;
