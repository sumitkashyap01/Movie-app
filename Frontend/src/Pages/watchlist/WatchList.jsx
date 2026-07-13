import {useState, useEffect} from 'react'
import axios from "axios";
import MovieList from "../../components/MovieList";
import {useUserMovieContext} from '../../Context/UserMovieContext/userMovieContext';


const WatchList = () => {

    const {watchlist} = useUserMovieContext()

    return (
        <div className="px-5 py-20 lg:px-20 lg:py-25 flex flex-col gap-5 lg:gap-10 w-full">
            <h1 className="text-5xl text-(--accent) font-extrabold font-poppins">
                Watchlist
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                {watchlist.map((item, index) => (
                    <MovieList key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default WatchList
