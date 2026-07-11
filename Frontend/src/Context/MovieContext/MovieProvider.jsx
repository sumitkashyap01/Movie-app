import React, { useState, useContext, useEffect, useRef } from "react";
import MovieContext, { useMovieContext } from "./MovieContext";
import { useFetchMovies } from "../../hooks/fetchMovies";
import { getMovieDetails, getPopular, getTopRated } from "../../api/tmdb";

export function MovieProvider({ children }) {
  const [m_name, setM_name] = useState("");
  const [page, setPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);

  const [popularCache, setPopularCache] = useState({});
  const [topRatedCache, setTopRatedCache] = useState({});

  const isFetchingRef = useRef(false);

  const popular = useFetchMovies(getPopular(), popularPage);
  const topRated = useFetchMovies(getTopRated(), topRatedPage);

  useEffect(() => {
    if (popular) {
      if (popularCache[popular.page] === undefined) {
        setPopularCache((prev) => ({ ...prev, [popular.page]: popular }));
        isFetchingRef.current = false;
      }
    }
  }, [popular]);

  useEffect(() => {
    if (popularCache[popularPage] !== undefined) {
      isFetchingRef.current = false;
    }
  }, [popularCache, popularPage]);

  useEffect(() => {
    if (topRated) {
      if (topRatedCache[topRated.page] === undefined) {
        setTopRatedCache((prev) => ({ ...prev, [topRated.page]: topRated }));
        isFetchingRef.current = false;
      }
    }
  }, [topRated]);

  useEffect(() => {
    if (topRatedCache[topRatedPage] !== undefined) {
      isFetchingRef.current = false;
    }
  }, [topRatedCache, topRatedPage]);

  return (
    <MovieContext.Provider
      value={{
        m_name,
        setM_name,
        page,
        setPage,
        popularPage,
        topRatedPage,
        setPopularPage,
        setTopRatedPage,
        popular,
        topRated,
        popularCache,
        topRatedCache,
        isFetchingRef,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
