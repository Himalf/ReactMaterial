import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {product.map((val, i) => {
          return <div key={i}>{val.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Products;

// https://fakestoreapi.com/products/ -> API
