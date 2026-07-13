import React, {useState} from "react";
import {useContext} from "react";
import ThemeContext from "../Context/createContext";
import {CiLight} from "react-icons/ci";
import {MdOutlineDarkMode} from "react-icons/md";
import {FaSearch} from "react-icons/fa";
// import useMovies from "../hooks/movies";
// import { useNavigate } from "react-router-dom";
import {Link, NavLink} from "react-router-dom";
import MovieContext from "../Context/MovieContext/MovieContext";
import Hamburger from "./Hamburger.jsx";

const Navbar = ({m_name, set_name}) => {
    // const [page, setPage] = useState(1);
    const {theme, setTheme} = useContext(ThemeContext);
    const {setPage} = useContext(MovieContext);
    const [input, setInput] = useState("");
    const[isOpened,setIsopened] = useState(false)
    const search = () => {
        setPage(1);
        set_name(input);
    };
    return (
        <div className={`absolute z-999 w-screen  ${isOpened?"bg-(--surface) duration-100":"bg-transparent duration-700"} `}>
            <div className="flex justify-between items-center px-2 md:px-5 lg:px-10 py-4">
                <div className="flex gap-1 md:gap-5 lg:gap-10">
                    <Link to="/" className="flex-1 text-4xl md:text-5xl font-bold dark:text-white">logo</Link>
                    <div className="hidden  md:flex md:gap-8 lg:gap-10 gap-2 items-center font-bold ">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `text-(--text) text-xs md:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/watchlist"
                            className={({isActive}) =>
                                `text-(--text) text-xs md:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
                            }
                        >
                            Watchlist
                        </NavLink>
                        <NavLink
                            to="/watched"
                            className={({isActive}) =>
                                `text-(--text) text-xs md:text-base ${isActive ? "border-b-2 border-(--accent)" : "border-0"}`
                            }
                        >
                            Watched
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-3 md:gap-5   items-center">
                    <div
                        className="bg-(--surface) border-2 border-white/10 flex items-center rounded-3xl not-md:h-9 not-md:w-9 gap-2  justify-center  md:px-5">
                        <FaSearch className="text-base"/>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            className="md:block hidden p-1 text-white dark:text-black w-30 h-10  focus:outline-0 focus:w-40 transition-all"
                            type="text"
                            placeholder="search movies.."
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="flex justify-center items-center relative bg-amber-400 w-9 h-9 md:w-10 md:h-10 rounded-4xl dark:bg-(--surface) border-2 border-white/20 transition-all"
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
                                        className={`${theme === "dark" ? "" : ""} bg-gray-800 text-white rounded-full text-xl`}
                                    ></MdOutlineDarkMode>
                                </div>

                            </div>
                        </button>
                    </div>
                    <Hamburger isOpened={isOpened} setIsOpened={setIsopened}/>
                    <div className="md:block hidden w-8 h-8 md:w-10 md:h-10 bg-orange-400 rounded-full"></div>
                </div>
            </div>
            <div className={`lg:hidden flex flex-col overflow-hidden ${isOpened?"max-h-96 duration-300 pb-2":"max-h-0 duration-300"} px-5 md:px-15 gap-2 bg-(--surface)`}>
                <Link
                    onClick={()=>setIsopened(prev=>!prev)}
                    to={"/"}>Home</Link>
                <hr/>
                <Link
                    onClick={()=>setIsopened(prev=>!prev)}
                    to={"/watchlist"}>Watchlist</Link>
                <hr/>
                <Link
                    onClick={()=>setIsopened(prev=>!prev)}gi
                    to={"/watched"}>Watched</Link>
            </div>
        </div>
    );
};

export default Navbar;
