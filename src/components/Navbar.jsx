import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Student Manager
        </h1>
        <div className="space-x-2">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }
          >
            Student List
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }
          >
            Add Student
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
