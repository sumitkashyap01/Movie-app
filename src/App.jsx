import React, { useState, useEffect } from "react";
import ThemeContext from "./Context/createContext";
import MovieContext from "./Context/MovieContext/MovieContext";
import { MovieProvider } from "./Context/MovieContext/MovieProvider";
// import Navbar from "./components/Navbar";
// import Card from "./components/Card";
import Home from "./components/Home";
import Popular from "./Pages/Popular";
import TopRated from './Pages/TopRated'
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Movie from "./Pages/Movie/Movie";
import ScrollToTop from "./components/ScrollToTop";
// import Searchimport from "./components/Search"

const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);
  console.log(import.meta.env);
  

  return (
    // <BrowserRouter>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MovieProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/toprated" element={<TopRated />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Navbar m_name={m_name} set_name={setM_name} />
      <Search m_name={m_name}/> */}
      </MovieProvider>
    </ThemeContext.Provider>
    // </BrowserRouter>
  );
};

export default App;

// import React from 'react'
// import Loading from './components/Loading'

// const App = () => {
//   return (
//     <div>
//       <Loading/>
//     </div>
//   )
// }

// export default App
