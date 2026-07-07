import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Poster = ({ movieDetails, credits }) => {
  const score = movieDetails?.vote_average * 10;
  console.log(movieDetails);
  return (
    <>
      <div className="poster not-md:w-full self-start flex flex-col gap-5 justify-center shrink-0 order-2 lg:-order-1">
        {movieDetails?.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            alt=""
            className="lg:w-70 md:w-60 not-md:hidden rounded-2xl"
          />
        ) : (
          <div className="w-70 h-100 rounded-2xl bg-(--surface) animate-pulse"></div>
        )}
        <div className="flex md:w-60 md:h-20 lg:w-70 h-25 items-center justify-center gap-5 bg-(--surface) rounded-2xl border-white/20 border-2 px-5 md:py-8 lg:py-12">
          {movieDetails ? (
            <>
              {movieDetails?.vote_count !== 0 && (
                <div className=" flex items-center md:w-15 lg:w-20 w-17 bg-(--surface) rounded-full">
                  <CircularProgressbar
                    value={score}
                    text={Number(movieDetails?.vote_average?.toFixed(1))}
                    styles={buildStyles({
                      pathColor:
                        movieDetails?.vote_average >= 7
                          ? "#22c55e"
                          : movieDetails?.vote_average >= 5
                            ? "#eab308"
                            : "#ef4444",
                      trailColor: "#374151",
                      textColor: "#fff",
                      textSize: "24px",
                    })}
                    className=""
                  />
                </div>
              )}
              <div className="flex flex-col lg:items-center flex-1">
                {
                  movieDetails?.vote_count !== 0 ?
                  <>
                    <h2 className="md:text-md lg:text-base text-lg font-bold">
                      Audience Score
                    </h2>
                    <p className=" text-(--text-secondary) lg:text-md text-sm">
                      from {movieDetails?.vote_count} votes
                    </p>
                  </>
                  :
                  <h2>Not Rated Yet</h2>
                }
              </div>
            </>
          ) : (
            <div className="w-20 h-20 bg-(--surface) rounded-full animate-pulse"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Poster;
