import React, { useRef, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { useFetchImages, useFetchMovies } from "../hooks/fetchMovies";
import { getCast, getMovieDetails } from "../api/tmdb";
// import { useMovieContext } from '../Context/MovieContext/MovieContext'


function Hero({ movie_data }) {
  const id = movie_data?.id;
  const MovieDetail = useFetchMovies(getMovieDetails(id))
  const CastDetail = useFetchMovies(getCast(id)) || []
  console.log("hello",MovieDetail);
  

  const ImageData = useFetchImages(id);;
  const engLogo = ImageData?.logos?.find((logo) => logo.iso_639_1 === "en");

  return (
    <div className="h-[75%]">
      <div
        className="relative w-screen h-full bg-cover not-lg:bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${ImageData?.backdrops[0]?.file_path})`,
        }}
      >
        {CastDetail !== null && (
          <div className="w-[95%] h-[85%] flex justify-end items-end">
            <div className=" relative z-9999">
              <p className="text-(--text-secondary) lg:text-base text-sm flex gap-3">
                Starring{" "}
                {CastDetail?.cast?.slice(0, 2).map((item, index) => (
                  <span className="text-(--text)  font-bold">{item.name}</span>
                ))}
              </p>
              <p className="text-(--text-secondary) lg:text-base text-xs">
                Director{" "}
                {CastDetail?.crew?.map(
                  (item, index) =>
                    item.job === "Director" && (
                      <span className="text-(--text)  font-bold">
                        {item.name}
                      </span>
                    ),
                )}
              </p>
            </div>
          </div>
        )}
        {/* <div className="absolute bg-black/50 inset-0 z-50"></div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-(--bg) via-(--bg)/30 to-transparent" />
        <div className="p-0 w-full h-20 absolute bg-linear-to-b from-(--bg) via-(--bg)/40 to-transparent inset-0 z-100"></div>
        <div className="w-20 h-full absolute left-0 bg-linear-to-r from-(--bg) via-(--bg)/50 to-transparent inset-0 z-100"></div>
        <div className="absolute w-full z-100 bottom-50">
          <div className="flex flex-col lg:items-center items lg:w-[50%] gap-4 pl-3">
            <img
              src={`https://image.tmdb.org/t/p/original/${engLogo?.file_path}`}
              alt=""
              className="lg:max-w-150 lg:max-h-50 max-w-70 max-h-30   object-contain"
            />
            <h1 className="text-(--text-secondary) text-lg lg:max-w-[70%] w-[70%] font-medium text-center line-clamp-3 lg:line-clamp-none">
              {movie_data?.overview?.length > 220
                ? movie_data?.overview?.slice(0, 240) + "..."
                : movie_data?.overview}
            </h1>
            <div className="flex lg:justify-center lg:w-full">
              <div className="flex justify-center items-center gap-2 bg-white/20 rounded-full p-2 w-[]">
                {MovieDetail?.genres?.slice(0,4).map((item, index) => (
                  <React.Fragment key={index}>
                    <p className="lg:text-lg text-sm cursor-pointer hover:underline hover:text-(--text-secondary)">
                      {item.name}
                    </p>
                    {index != MovieDetail?.genres.slice(0,4).length - 1 && <GoDotFill />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-40 bg-(--bg)"></div>
    </div>
  );
}

export default Hero;
