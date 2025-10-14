import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPgae, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // const navigate = useNavigate();

  // Fetch products from API
  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // filter product
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // pagination logic
  const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPgae - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPgae > 1) setCurrentPage(currentPgae - 1);
  };
  const handleNext = () => {
    if (currentPgae < totalPage) setCurrentPage(currentPgae + 1);
  };

  const handlePageClick = (page) => setCurrentPage(page);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-white"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Product Image */}
            <div className="p-4 h-48 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="px-4 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                {product.title}
              </h3>

              <div className="flex justify-between items-center mt-3">
                <span className="text-blue-600 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <IoIosStar className="text-yellow-400 text-lg" />
                  {product.rating.rate} ({product.rating.count})
                </span>
              </div>

              <button
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking button
                  alert(`${product.title} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          // <div>
          //   <table>
          //     <thead>
          //       <th>S.N</th>
          //       <th>Title</th>
          //       <th>Description</th>
          //       <th>Price</th>
          //     </thead>
          //     <tbody>
          //       <tr>{product.id}</tr>
          //       <tr>{product.title}</tr>
          //       <tr>{product.id}</tr>
          //       <tr>{product.title}</tr>
          //     </tbody>
          //   </table>
          // </div>
        ))}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={handlePrev}
            className={`px-4 py-2 rounded-md border ${
              currentPgae === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-md border font-medium ${
                  currentPgae === page
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-md border ${
              currentPgae === totalPage
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
