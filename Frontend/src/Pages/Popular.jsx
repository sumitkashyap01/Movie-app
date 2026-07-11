import React, { use, useEffect, useRef, useState } from "react";
import { useMovieContext } from "../Context/MovieContext/MovieContext";
import MovieList from "../components/MovieList";

const Popular = () => {
  const PageLoader = useRef();

  const { popularCache, setPopularPage, isFetchingRef } = useMovieContext();
  console.log("popularmov:", popularCache);


    useEffect(() => {
      setPopularPage(1);
      return ()=> setPopularPage(1)
    },[]);


useEffect(() => {
  const Observe = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isFetchingRef.current) {
      isFetchingRef.current = true;
      setPopularPage((prev) => prev + 1);
    }
  });
  if (!PageLoader.current) return;
  Observe.observe(PageLoader.current);
  return () => Observe.disconnect()
}
, []);
  return (
    <>
      <div className="lg:p-20 p-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 lg:gap-5">
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
