import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../Context/createContext";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
// import useMovies from "../hooks/movies";
// import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MovieContext from "../Context/MovieContext/MovieContext";

const Navbar = ({ m_name, set_name }) => {
  // const [page, setPage] = useState(1);
  const { theme, setTheme } = useContext(ThemeContext);
  const { setPage } = useContext(MovieContext);
  const [input, setInput] = useState("");
  const search = () => {
    setPage(1);
    set_name(input);
  };
  return (
    <div className="absolute z-999 w-screen">
      <div className="flex justify-between items-center px-2 lg:px-10 py-4">
        <div className="flex gap-1 lg:gap-10">
          <Link to="/" className="flex-1 text-3xl lg:text-4xl font-bold dark:text-white">logo</Link>
          <div className="flex lg:gap-10 gap-2 items-center font-bold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `dark:text-white text-xs lg:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                `dark:text-white text-xs lg:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
              }
            >
              Watchlist
            </NavLink>
            <NavLink
              to="/watched"
              className={({ isActive }) =>
                `dark:text-white text-xs lg:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
              }
            >
              Watched
            </NavLink>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-3 lg:gap-5 items-center">
          <div className="bg-amber-300 dark:bg-(--bg-secondary) border-2 border-white/10 flex items-center rounded-3xl not-md:w-10 not-md:h-10  justify-center  lg:px-5">
            <FaSearch className="text-gray-500" />
            <input
              onChange={(e) => setInput(e.target.value)}
              className="lg:block hidden p-1 text-white w-30 focus:outline-0 focus:w-50 transition-all"
              type="text"
              placeholder="search movies.."
            />
          </div>
          <div>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex justify-center items-center relative bg-amber-400 w-9 h-9 lg:w-10 lg:h-10 rounded-4xl dark:bg-(--surface) border-2 border-white/20 transition-all"
            >
              <div>
              <div
                className={`${theme === "light" ? "opacity-100" : "opacity-0"} absolute inset-0 flex justify-center items-center`}
              >
                <CiLight className={`    rounded-full text-2xl`}></CiLight>
              </div>
              <div
                className={`${theme === "dark" ? "opacity-100" : "opacity-0"} absolute inset-0 flex justify-center items-center`}
              >
                <MdOutlineDarkMode
                  className={`${theme === "dark" ? "" : ""} bg-gray-800 text-white rounded-full text-2xl`}
                ></MdOutlineDarkMode>
              </div>

              </div>
            </button>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
