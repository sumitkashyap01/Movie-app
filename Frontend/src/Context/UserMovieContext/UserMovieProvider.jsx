import React, { useEffect, useRef, useState } from "react";
import { userMovieContext } from "./userMovieContext";
import axios from "axios";

const UserMovieProvider = ({ children }) => {
  const [watchedlist, setWatchedlist] = useState([]);

  console.log("watchedlist:", watchedlist);
  console.log("length:", watchedlist.length);
  const addToWatched = async (movie) => {
    try {
      await axios.post("/movies/watched", movie);
      setWatchedlist((prev) => [...prev, movie]);
    } catch (err) {
      console.error("Backend unavailable");
    }
  };
  const removeFromWatched = async (movie) => {
    try {
      await axios.delete(`/movies/watched/${movie.id}`);
      const newArr = watchedlist.filter((w) => w.id !== movie.id);
      setWatchedlist(newArr);
    } catch (err) {
      console.error("backend inactive");
    }
  };
  const isWatched = (movie) => {
    if(!movie) return false
    if (!Array.isArray(watchedlist)) return false;
    const isWatched = movie
      ? watchedlist.some((s) => s.id === movie.id)
      : false;
    return isWatched;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("/movies/watched");
        console.log(res.data);

        setWatchedlist(res.data);
      } catch (err) {
        console.error(err);
        setWatchedlist([]);
      }
    };
    fetchUserData();
  }, []);

  return (
    <userMovieContext.Provider
      value={{ watchedlist, addToWatched, removeFromWatched, isWatched }}
    >
      {children}
    </userMovieContext.Provider>
  );
};

export default UserMovieProvider;
