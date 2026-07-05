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
    <div className="h-screen relative scrollbar-none">
      {slideshow?.results?.slice(0, 6).map((item, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === track ? "opacity-100" : "opacity-0"
          }`}
        >
          <Hero className="" movie_data={item} track={track} />
        </div>
      ))}
      <div className="h-[80%]"></div>
      <div className="relative">
        <h1 className="bg-(--bg) text-(--accent) font-heading pl-5 text-6xl lg:text-8xl">
          Trending Today
        </h1>
        <div className="w-full scrollbar-none overflow-auto">
          <div className="flex">
            {todayTrending?.results?.map((item, index) => {
              if (index > 9) return;
              return (
                <MovieList
                  key={index}
                  isTrending={true}
                  rank={index + 1}
                  data={item}
                />
              );
            })}
          </div>
        </div>
        {/* <Link to={"/popular"}> */}
        <div className="flex lg:justify-start justify-center">
          <h1 className="lg:pl-5 mt-10 bg-(--bg) text-(--accent) inline-block font-heading text-8xl hover:text-(--accent-hover) hover:scale-105">
            Popular
          </h1>
        </div>
        {/* </Link> */}
        <div className="flex justify-center flex-wrap">
          {popular?.results?.map((item, index) => {
            // if (index > 9) return;
            return <MovieList key={index} rank={index + 1} data={item} />;
          })}
          <Link
            to="/popular"
            className="ml-8 flex justify-center items-center"
          >
            {/* <div className="bg-(--surface) p-10 rounded-full hover:bg-(--surface-hover) "> */}
            <IoIosArrowForward className="bg-(--surface) p-8 rounded-full hover:bg-(--surface-hover) text-8xl text-(--text-muted) hover:text-(--text) " />
            {/* </div> */}
          </Link>
        </div>
        <h1 className="pl-5 mt-10 bg-(--bg) text-(--accent) inline-block font-heading text-8xl cursor-pointer hover:text-(--accent-hover) hover:scale-105">
          Top Rated
        </h1>
        <div className="flex justify-center flex-wrap">
          {topRated?.results?.map((item, index) => {
            // if (index > 9) return;
            return <MovieList key={index} data={item} />;
          })}
          <Link
            to="/toprated"
            className="ml-8 flex justify-center items-center"
          >
            <IoIosArrowForward className="bg-(--surface) p-8 rounded-full hover:bg-(--surface-hover) text-8xl text-(--text-muted) hover:text-(--text) " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
