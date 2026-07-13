import React, { useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import useMovies from "../hooks/movies";
import { getDailyTrending, getPopular, getTopRated, getTrending } from "../api/tmdb";
import { useFetchMovies } from "../hooks/fetchMovies";
import MovieList from "./MovieList";
import { useMovieContext } from "../Context/MovieContext/MovieContext";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [track, setTrack] = useState(0);
  const slideshow = useFetchMovies(getTrending());
  const todayTrending = useFetchMovies(getDailyTrending());
  const {popular,topRated} = useMovieContext()

  useEffect(() => {
    if (!slideshow?.results?.length) return;
    const count = Math.min(slideshow.results.length, 5);
    const interval = setInterval(() => {
      setTrack((prev) => (prev + 1) % count);
    }, 8000);
    return () => clearInterval(interval);
  }, [slideshow]);
  return (
    <div className="relative scrollbar-none">
      {slideshow?.results?.slice(0, 6).map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === track ? "opacity-100" : "opacity-0"
          }`}
        >
          <Hero className="" movie_data={item} track={track} />
        </div>
      ))}
      <div className="min-h-[52vh] lg:min-h-[80vh]"></div>
      <div className="relative">
        <h1 className="bg-(--bg) text-(--accent) font-heading pl-5 text-6xl md:text-8xl">
          Trending Today
        </h1>
        <div className="w-full scrollbar-none overflow-auto">
          <div className="flex gap-3 p-3">
            {todayTrending?.results?.map((item, index) => {
              if (index > 9) return;
              return (
                <MovieList
                  key={item.id}
                  isTrending={true}
                  rank={index + 1}
                  data={item}
                />
              );
            })}
          </div>
        </div>
        {/* <Link to={"/popular"}> */}
        <div className="flex md:justify-start justify-center">
          <h1 className="md:pl-5 mt-10 bg-(--bg) text-(--accent) inline-block font-heading text-6xl md:text-8xl hover:text-(--accent-hover) hover:scale-105">
            Popular
          </h1>
        </div>
        {/* </Link> */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-5 p-4">
          {popular?.results?.map((item, index) => {
            // if (index > 9) return;
            return <MovieList key={item.id} rank={index + 1} data={item} />;
          })}
          <Link to="/popular" className="flex justify-center items-center">
            {/* <div className="bg-(--surface) p-10 rounded-full hover:bg-(--surface-hover) "> */}
            <IoIosArrowForward className="bg-(--surface) lg:p-8 rounded-full hover:bg-(--surface-hover) lg:text-8xl text-6xl text-(--text-muted) hover:text-(--text) " />
            {/* </div> */}
          </Link>
        </div>
        <div className="flex md:justify-start justify-center">
          <h1 className="md:pl-5 mt-10 bg-(--bg) text-(--accent) inline-block font-heading text-6xl md:text-8xl hover:text-(--accent-hover) hover:scale-105">
            Top Rated
          </h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-5 p-3">
          {topRated?.results?.map((item, index) => {
            // if (index > 9) return;
            return <MovieList key={item.id} data={item} />;
          })}
          <Link to="/toprated" className="flex justify-center items-center">
            <IoIosArrowForward className="bg-(--surface) lg:p-8 rounded-full hover:bg-(--surface-hover) lg:text-8xl text-6xl text-(--text-muted) hover:text-(--text) " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
