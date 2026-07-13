import React from "react";

const Title = ({ movieDetails, credits }) => {
  const director = credits?.crew?.filter(
    (director) => director.job === "Director",
  );
  const release_date = new Date(movieDetails?.release_date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );
  const runtime = movieDetails?.runtime;
  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;
  return (
    <>
      <div className="info h-full flex-1 flex flex-col gap-4 lg:gap-7">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 lg:gap-4">
            {/* <p>Genre: </p> */}
            {movieDetails ? (
              movieDetails?.genres.slice(0, 4).map((item, index) => (
                <p
                  key={item.id}
                  className="bg-(--bg-surface)  border-2 border-(--text)/10 rounded-4xl px-2 py-1 lg:text-base text-xs"
                >
                  {item.name.toUpperCase()}
                </p>
              ))
            ) : (
              <>
                <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
                <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
                <div className="w-25 h-12 rounded-4xl bg-(--surface) animate-pulse"></div>
              </>
            )}
          </div>

          {movieDetails ? (
            <h1 className="text-4xl font-poppins font-extrabold">
              {movieDetails?.title}
            </h1>
          ) : (
            <div className="w-full h-120 bg-(--surface) rounded-xl"></div>
          )}
        </div>
        {movieDetails && (
          <>
              {movieDetails?.tagline.length !== 0 && (
              <>
            <div className="flex items-center gap-2 lg:gap-4">
                  <div className="h-7 lg:h-10 w-1 bg-(--accent) "></div>
                  <p className="italic text-xs lg:text-base text-(--text-muted)">
                    "{movieDetails?.tagline}"
                  </p>
            </div>
                </>
              )
              }
            <p className="text-(--text-secondary) text-sm  lg:text-base font-poppins">
              {movieDetails?.overview}
            </p>
            <hr className="" />
            <div className="flex justify-around ">
              <div className="flex flex-col ">
                <p className="text-(--text-muted) lg:text-base text-sm">
                  Director
                </p>
                <p className="font-semibold text-sm">{director?.[0].name}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-(--text-muted) lg:text-base text-sm">
                  Release Date
                </p>
                <p className="font-semibold lg:text-base text-sm">
                  {release_date}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-(--text-muted) lg:text-base text-sm">
                  Runtime
                </p>
                <p className="font-semibold lg:text-base text-sm">
                  {hour}h {min}m
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Title;
