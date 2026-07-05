import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovies } from "../../hooks/fetchMovies";
import { getCast, getMovieDetails, getRecommendations } from "../../api/tmdb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Left from "./movieSubComponent/Left";
import Right from "./movieSubComponent/Right";
import placeholder from "../../assets/placeholder.jpg";
import MovieList from "../../components/MovieList";

const Movie = () => {
  const { id } = useParams();
  const movieDetails = useFetchMovies(getMovieDetails(Number(id)));
  const credits = useFetchMovies(getCast(id));
  const recommendation = useFetchMovies(getRecommendations(id));

  return (
    <div className="relative w-screen min-h-screen flex flex-col gap-20 items-center">
      <div
        className=" absolute h-[70vh] w-full bg-cover not-md:bg-center object-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
        }}
      ></div>
      <div className="absolute h-[70vh] inset-0 bg-linear-to-t from-(--bg) via-(--bg)/60 to-transparent"></div>
      <div className="absolute h-[70vh] inset-0 bg-linear-to-b from-(--bg)/30 to-transparent"></div>
      <div className="absolute h-[70vh] inset-0 bg-linear-to-l from-(--bg)/30 to-transparent"></div>
      <div className="absolute h-[70vh] inset-0 bg-linear-to-r from-(--bg)/30 to-transparent"></div>

      <div className="z-9 w-[95%] mt-80 flex items-center  md:w-[90%] md:px-20">
        <div
          className="w-full grid gap-10 xl:grid-cols-[3.5fr_1fr] lg:grid-cols-[3fr_1fr] grid-cols-1"
          // style={{ gridTemplateColumns: "3.5fr 1fr" }}
        >
          <div className="left flex flex-col md:flex-row gap-6 items-center">
            <Left movieDetails={movieDetails} credits={credits} />
          </div>
          <div className="right flex flex-col gap-2">
            <Right movieDetails={movieDetails} />
          </div>
        </div>
      </div>
      { (
        <>
          <div className="z-99 sm:mt-10  md:mt-0 flex justify-center w-full">
            <div className="flex flex-col gap-5 md:w-[85%] md:p-5 p-2 rounded-2xl bg-(--surface)">
              <p className="text-(--accent) text-6xl font-extrabold font-heading">
                CAST
              </p>
              <hr />
              <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-col-3 grid-cols-2">
                {credits?.cast?.slice(0, 15).map((item, index) => (
                  <div className="flex flex-col items-center gap-4 lg:p-5 p-3">
                    <img
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                          : placeholder
                      }
                      alt=""
                      className="lg:w-40  rounded-xl hover:scale-105"
                    />
                    <div className="flex flex-col items-center font-bold">
                      <p className="">{item.character}</p>
                      <p className="text-(--text-secondary) lg:text-sm text-xs">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-poopins font-bold">
              You Might Also Like
            </h1>
            <div className="flex flex-wrap justify-center lg:w-[85%] w-full">
              {recommendation?.results?.map((item, index) => (
                <MovieList key={item.id} data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
