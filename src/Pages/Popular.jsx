import React, { use, useEffect, useRef, useState } from "react";
import { useMovieContext } from "../Context/MovieContext/MovieContext";
import MovieList from "../components/MovieList";

const Popular = () => {
  const PageLoader = useRef();
  const [MovieCache, setMovieCache] = useState({});

  const { popularCache, page, setPage } = useMovieContext();
  useEffect(() => {
    const Observe = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (!PageLoader.current) return;
    Observe.observe(PageLoader.current);
    return () => {
      Observe.disconnect();
      setPage(1);
    };
  }, []);

//   useEffect(() => {
//     if (popularCache) {
//       if (MovieCache[page] === undefined) {
//         setMovieCache((prev) => ({ ...prev, [page]: popular }));
//       }
//     }
//   }, [popular]);
  return (
    <>
      <div className="flex flex-wrap justify-center md:p-20">
        {Object.values(popularCache).map((item, index) =>
          item.results.map((item, index) => (
            <MovieList data={item} key={item.id} />
          )),
        )}
      </div>
      <div ref={PageLoader} className="w-full h-1"></div>
    </>
  );
};

export default Popular;
