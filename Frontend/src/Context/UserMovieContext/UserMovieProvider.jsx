import React, {useEffect, useRef, useState} from "react";
import {userMovieContext} from "./userMovieContext";
import axios from "axios";

const UserMovieProvider = ({children}) => {
    const [watchedlist, setWatchedlist] = useState([]);
    const [watchlist, setWatchlist] = useState([]);


    const addToWatched = async (movie) => {
        try {
            await axios.post("https://movie-app-2q5c.onrender.com/movies/watched", movie);
            setWatchedlist((prev) => [...prev, movie]);
        } catch (err) {
            console.error("Backend unavailable");
        }
    };
    const removeFromWatched = async (movie) => {
        try {
            await axios.delete(
                `https://movie-app-2q5c.onrender.com/movies/watched/${movie.id}`,
            );
            const newArr = watchedlist.filter((w) => w.id !== movie.id);
            setWatchedlist(newArr);
        } catch (err) {
            console.error("backend inactive");
        }
    };
    const isWatched = (movie) => {
        if (!movie) return false
        if (!Array.isArray(watchedlist)) return false;
        const isWatched = movie
            ? watchedlist.some((s) => s.id === movie.id)
            : false;
        return isWatched;
    };

    const addToWatchlist = async (movie) => {
        try {
            await axios.post(
                "https://movie-app-2q5c.onrender.com/movies/watchlist",
                movie,
            );
            setWatchlist((prev) => [...prev, movie]);
        } catch (err) {
            console.error("Backend unavailable");
        }
    };
    const removeFromWatchlist = async (movie) => {
        try {
            await axios.delete(
                `https://movie-app-2q5c.onrender.com/movies/watchlist/${movie.id}`,
            );
            const newArr = watchlist.filter((w) => w.id !== movie.id);
            setWatchlist(newArr);
        } catch (err) {
            console.error("backend inactive");
        }
    };
    const inWatchlist = (movie) => {
        if (!movie) return false;
        if (!Array.isArray(watchlist)) return false;
        const inWatchlist = movie
            ? watchlist.some((s) => s.id === movie.id)
            : false;
        return inWatchlist;
    };

    useEffect(() => {
        const fetchWatchedData = async () => {
            try {
                const res = await axios.get(
                    "https://movie-app-2q5c.onrender.com/movies/watched",
                );

                setWatchedlist(res.data);
            } catch (err) {
                console.error(err);
                setWatchedlist([]);
            }
        };
        const fetchWatchlistData = async () => {
            try {
                const res = await axios.get(
                    "https://movie-app-2q5c.onrender.com/movies/watchlist",
                );

                setWatchlist(res.data);
            } catch (err) {
                console.error(err);
                setWatchlist([]);
            }
        };
        fetchWatchedData();
        fetchWatchlistData();
    }, []);

    return (
        <userMovieContext.Provider
            value={{
                watchedlist,
                watchlist,
                addToWatched,
                addToWatchlist,
                removeFromWatched,
                removeFromWatchlist,
                isWatched,
                inWatchlist,
            }}
        >
            {children}
        </userMovieContext.Provider>
    );
};

export default UserMovieProvider;
