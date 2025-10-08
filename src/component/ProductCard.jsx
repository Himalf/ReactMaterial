import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
    console.log(res.data, "Product data");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-3 my-5 p-5">
      {product.map((val, i) => (
        <div
          className="w-96 h-96 border border-red-500 rounded-md"
          key={i}
          onClick={() => navigate(`/product/${val.id}`)}
        >
          <div className="pt-4">
            <img src={val.image} className="h-28 mx-auto" />
          </div>
          <div className="mt-2 text-xl font-bold text-center p-2">
            {val.title}
          </div>
          <div className="flex justify-evenly">
            <div className="mt-2 text-xl font-bold text-center p-2 text-blue-500">
              ${val.price}
            </div>
            <div className="mt-2 font-bold text-center p-2 text-black flex items-center gap-1">
              <IoIosStar className="text-yellow-500" /> {val.rating.rate} (
              {val.rating.count})
            </div>
          </div>
          <div className="w-full">
            <button className="bg-blue-500 text-white text-sm rounded-md px-5 py-2 font-bold mt-10 ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
