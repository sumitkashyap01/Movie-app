import React, { useRef, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { useFetchImages, useFetchMovies } from "../hooks/fetchMovies";
import { getCast, getMovieDetails } from "../api/tmdb";
// import { useMovieContext } from '../Context/MovieContext/MovieContext'

function Hero({ movie_data }) {
  const id = movie_data?.id;
  const MovieDetail = useFetchMovies(getMovieDetails(id));
  const CastDetail = useFetchMovies(getCast(id)) || [];
  console.log("hello", MovieDetail);

  const ImageData = useFetchImages(id);
  const engLogo = ImageData?.logos?.find((logo) => logo.iso_639_1 === "en");

  return (
    <div className="">
      <div
        className="relative w-screen min-h-[50vh] lg:min-h-[74vh] bg-cover not-lg:bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${ImageData?.backdrops[0]?.file_path})`,
        }}
      >
        {/* <div className="absolute bg-black/50 inset-0 z-50"></div> */}
        <div className="absolute inset-0  bg-linear-to-t from-(--bg) via-(--bg)/30 to-transparent" />
        <div className="p-0 w-full h-70 lg:h-20 absolute bg-linear-to-b from-(--bg) via-(--bg)/40 to-transparent inset-0 z-100"></div>
        <div className="lg:w-20 h-full absolute left-0 bg-linear-to-r from-(--bg) via-(--bg)/50 to-transparent inset-0 z-100"></div>
        <div className="absolute w-full z-100 bottom- lg:">
          <div className="flex flex-col justify-end w-screen min-h-[50vh] lg:min-h-[73vh] gap-5 lg:gap-0">
            <div className="flex flex-col lg:w-[50%] gap-3 lg:gap-5">
              <div className="flex px-5 lg:justify-center">
                <img
                  src={`https://image.tmdb.org/t/p/original/${engLogo?.file_path}`}
                  alt=""
                  className="self-start lg:max-w-150 lg:max-h-50 max-w-50 max-h-50   object-contain"
                />
              </div>
              <h1 className="self-center text-(--text-secondary) lg:text-lg text-sm  lg:max-w-[70%]  lg:font-medium line-clamp-3 lg:line-clamp-none px-5 lg:p-3">
                {movie_data?.overview?.length > 220
                  ? movie_data?.overview?.slice(0, 240) + "..."
                  : movie_data?.overview}
              </h1>
              <div className="w-full">
                <div className="flex px-5 lg:justify-center w-full">
                  <div className="flex justify-center items-center gap-2">
                    {MovieDetail?.genres?.slice(0, 4).map((item, index) => (
                      <React.Fragment key={index}>
                        <p className="lg:text-lg text-xs cursor-pointer hover:underline hover:text-(--text-secondary) border-2 border-white/10 rounded-4xl py-1 px-3">
                          {item.name}
                        </p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {CastDetail !== null && (
              <div className="flex flex-col justify-end items-end w-full gap-1 px-5 lg:px-20">
                {/* <div className=" relative z-9999"> */}
                <p className="text-(--text-secondary) lg:text-base text-[10px] flex gap-1 lg:gap-3">
                  Starring{" "}
                  {CastDetail?.cast?.slice(0, 2).map((item, index) => (
                    <span className="text-(--text) font-bold">{item.name}</span>
                  ))}
                </p>
                <p className="text-(--text-secondary) lg:text-base text-[10px]">
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
                {/* </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-(--bg)"></div>
    </div>
  );
}

export default Hero;
