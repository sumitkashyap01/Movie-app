import React, {useEffect, useRef, useState} from "react";
import {useMovieContext} from "../Context/MovieContext/MovieContext";
import MovieList from "../components/MovieList";

const TopRated = () => {
    const PageLoader = useRef();
    //   const [MovieCache, setMovieCache] = useState({});

    const {topRatedCache, setTopRatedPage, isFetchingRef} = useMovieContext();
    topRatedCache;

    useEffect(() => {
        setTopRatedPage(1);
        return () => setTopRatedPage(1);
    }, []);

    useEffect(() => {
        const Observe = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isFetchingRef.current) {
                setTopRatedPage((prev) => prev + 1);
            }
        });
        if (!PageLoader.current) return;
        Observe.observe(PageLoader.current);
        return () => Observe.disconnect();
    }, []);

    return (
        <div className={"py-15"}>
            <div className="lg:p-20 p-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 lg:gap-5">
                {Object.values(topRatedCache).map((item, index) =>
                    item.results.map((item, index) => (
                        <MovieList data={item} key={item.id}/>
                    )),
                )}
            </div>
            <div ref={PageLoader} className="w-full h-1"></div>
        </div>
    );
};

export default TopRated;
