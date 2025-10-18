import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { searchContext } from "../context/SearchContext";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState(""); // <-- category filter

  const { search, setSearch } = useContext(searchContext);
  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Extract unique categories for dropdown
  // const categories = [...new Set(product.map((item) => item.category))];

  const uniqueCategory = [...new Set(product.map((item) => item.category))];
  // Filter products by both search term and selected category
  const filteredProducts = product.filter((item) => {
    const term = search.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term);
    const matchCategory = category ? item.category === category : true;

    return matchSearch && matchCategory;
  });

  return (
    <div>
      {/* Search and Category Filter */}
      <div className="flex gap-4 mt-10 ml-10">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 w-1/3 focus:outline-none"
        />

        {/* <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat}
            </option>
          ))}
        </select> */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2"
        >
          <option value="">All Categories</option>
          {uniqueCategory.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-6 gap-10 p-10">
        {filteredProducts.map((value, index) => (
          <div
            className="p-6 border flex flex-col rounded shadow-lg shadow-gray-500"
            key={index}
          >
            <div>
              <img
                src={value.image}
                alt={value.title}
                className="h-24 mx-auto"
              />
            </div>
            <div className="text-sm font-semibold p-2 mt-3 text-center">
              {value.title}
            </div>
            <div className="flex justify-between items-center mb-10">
              <div className="font-bold text-blue-500">$ {value.price}</div>
              <div className="font-bold text-sm text-orange-600 flex gap-1 items-center">
                <IoStar /> {value.rating.rate} ({value.rating.count})
              </div>
            </div>
            <div className="w-full bg-blue-500 text-white font-semibold text-sm px-4 py-2 rounded text-center cursor-pointer">
              <button>View more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
