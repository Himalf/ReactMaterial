import React, { useContext } from "react";
import { searchContext } from "../context/SearchContext";

const Navbar = () => {
  const { search, setSearch } = useContext(searchContext);
  return (
    <div className="flex justify-center gap-5 mt-10 border p-4">
      <div>Home</div>
      <div>About</div>
      <div>
        <input
          type="text"
          className="border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
