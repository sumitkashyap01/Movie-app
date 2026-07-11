import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useMovies from "../hooks/movies";
import Card from "./Card";
import CardLoad from "./CardLoad";
import MovieContext from "../Context/MovieContext/MovieContext";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { m_name,page,setPage } = useContext(MovieContext);
  const { data, isLoading, setLoading } = useMovies(m_name, page);
  if (data?.results?.length === 0) {
    return (
      <>
        <div className="min-h-screen bg-amber-400 dark:bg-[#1e2a3a]">
          <div className="h-screen flex flex-col items-center justify-center gap-19">
            <input
              className="text-4xl p-4 bg-amber-200 w-[50%] h-20 rounded-3xl placeholder:text-3xl placeholder:text-center focus:outline-0 dark:bg-white"
              type="text"
              placeholder="Search Movie"
            />
            <div className="flex flex-col gap-5 items-center">
              <FaSearch className="text-8xl dark:text-white"></FaSearch>
              <h1 className="text-5xl dark:text-white">
                Search a movie to see results
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <div className="min-h-screen bg-amber-400 dark:bg-[#1e2a3a]">
          <h2 className="text-4xl font-bold p-6 dark:text-white">
            Showing Results For: "
            <span className="text-gray-500 dark:text-yellow-500">{m_name}</span>
            "
          </h2>
          <div className="flex justify-center p-6 flex-wrap gap-10">
            {Array.from({ length: 21 }).map((_, index) => (
              <CardLoad key={index} />
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
      <>
    <div className="min-h-screen py-20 bg-amber-400 dark:bg-[#1e2a3a]">
        <h2 className="text-4xl font-bold p-6 dark:text-white">
          Showing Results For: "
          <span className="text-gray-500 dark:text-yellow-500">{m_name}</span>"
        </h2>
        <div className="flex justify-center p-6 flex-wrap gap-10">
          {data.results &&
            data.results.map((item, index) => (
              <Card key={index} m_data={item} />
            ))}
        </div>
        <div className="flex justify-center p-2">
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: Math.min(data.total_pages, 19) }).map(
              (index, item) => (
                <div
                  onClick={() => setPage(item + 1)}
                  className="cursor-pointer bg-black rounded-full flex justify-center items-center text-white min-w-8 h-8"
                >
                  {item + 1}
                </div>
              ),
            )}
          </div>
        </div>

    </div>
      </>
  );
};

export default Search;
