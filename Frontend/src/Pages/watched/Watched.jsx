import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import MovieList from "../../components/MovieList";
import {useUserMovieContext} from "../../Context/UserMovieContext/userMovieContext";

const Watched = () => {
    const {watchedlist} = useUserMovieContext();
    // const [watchedMovies, setWatchedMovies] = useState([]);
    // useEffect(() => {
    //   const fetchWatchedMovies = async () => {
    //     const res = await axios.get("/movies/watched");
    //     // setWatchedMovies(res.data);
    //   };
    //   fetchWatchedMovies();
    // }, []);
    useEffect(() => {

    }, [])

    return (
        <div className="px-5 py-20 lg:px-20 lg:py-25 flex flex-col gap-5 lg:gap-10 w-full">
            <h1 className="text-5xl text-(--accent) font-extrabold font-poppins">
                Watched
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                {watchedlist.map((item, index) => (
                    <MovieList key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default Watched;
