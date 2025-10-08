import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
    console.log(res.data, "Product data");
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(id, "hjbfgkdh");

  return (
    <div>
      <div>{product.id}</div>
      <div>{product.description}</div>
      <div>{product.title}</div>
      <img src={product.image} />
    </div>
  );
};

export default SingleProduct;
