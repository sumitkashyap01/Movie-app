import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../Context/createContext";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
// import useMovies from "../hooks/movies";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieContext from "../Context/MovieContext/MovieContext";

const Navbar = ({m_name,set_name}) => {
  // const [page, setPage] = useState(1);
  const {theme,setTheme} = useContext(ThemeContext)
  const {setPage} = useContext(MovieContext)
  const [input, setInput] = useState("")
  const search = ()=>{
    setPage(1)
    set_name(input);
  }
  return (
    <div className="absolute z-999 w-screen">
      <ul className="flex justify-between items-center p-2">
        <li className="flex-1 text-4xl font-bold dark:text-white">logo</li>
        <li className="flex-1 flex justify-evenly items-center font-bold">
          <Link to="/" className="dark:text-white">
            Home
          </Link>
          <li className="dark:text-white">Favourite</li>
          <li className="">
            <div className="bg-amber-300 dark:bg-white flex items-center rounded-3xl">
              <input
                onChange={(e) => setInput(e.target.value)}
                className="p-2 text-black w-25 focus:outline-0"
                type="text"
                placeholder="search"
              />

              <Link
                to="/search"
                onClick={search}
                className="bg-blue-500 rounded-full p-4"
              >
                <FaSearch />
              </Link>
            </div>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-gray-800 w-15 h-8 rounded-4xl dark:bg-white"
            >
              {theme === "light" ? (
                <CiLight className="bg-amber-400 rounded-full w-5 h-5 ml-2"></CiLight>
              ) : (
                <MdOutlineDarkMode className="bg-gray-800 text-white rounded-full w-6 h-6 ml-8"></MdOutlineDarkMode>
              )}
            </button>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
