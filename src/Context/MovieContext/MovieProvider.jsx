import React, { useState, useContext, useEffect } from "react";
import MovieContext, { useMovieContext } from "./MovieContext";
import { useFetchMovies } from "../../hooks/fetchMovies";
import { getMovieDetails, getPopular, getTopRated } from "../../api/tmdb";

export function MovieProvider({ children }) {
  const [m_name, setM_name] = useState("");
  const [page, setPage] = useState(1);
  const [popularCache, setPopularCache] = useState({});
  const [topRatedCache, setTopRatedCache] = useState({});

  const popular = useFetchMovies(getPopular(), page);
  const topRated = useFetchMovies(getTopRated(), page);

  console.log(topRated, popular);
  

  useEffect(() => {
    if (popular) {
      if (popularCache[page] === undefined) {
        setPopularCache((prev) => ({ ...prev, [page]: popular }));
      }
    }
  }, [popular,page]);

  useEffect(() => {
    if (topRated) {
      if (topRatedCache[page] === undefined) {
        setTopRatedCache((prev) => ({ ...prev, [page]: topRated }));
      }
    }
  }, [topRated,page]);

  console.log(topRatedCache);
  

  return (
    <MovieContext.Provider
      value={{
        m_name,
        setM_name,
        page,
        setPage,
        popular,
        topRated,
        popularCache,
        topRatedCache,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
