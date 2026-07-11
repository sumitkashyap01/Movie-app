import React, { useEffect, useRef, useState } from 'react'
import { userMovieContext } from './userMovieContext'
import axios from 'axios'

const UserMovieProvider = ({children}) => {
    const[watchedlist, setWatchedlist] = useState([])

    console.log("watchedlist:", watchedlist);
    console.log("length:", watchedlist.length);
    const addToWatched = async(movie)=>{
        await axios.post("/movies/watched",movie)
        setWatchedlist(prev=>[...prev,movie])
    }
    const removeFromWatched = async(movie)=>{
        await axios.delete(`/movies/watched/${movie.id}`)
        const newArr = watchedlist.filter(w=>w.id !== movie.id)
        setWatchedlist(newArr)
    }
    const isWatched = (movie)=>{
        
        const isWatched = movie ? watchedlist.some(s=>s.id === movie.id) : false
        return isWatched
    }

useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get("/movies/watched");
      console.log(res.data);
      
      setWatchedlist(res.data);
    }
    fetchUserData()
},[])

  return (
    <userMovieContext.Provider
      value={{ watchedlist, addToWatched, removeFromWatched, isWatched }}
    >
      {children}
    </userMovieContext.Provider>
  );
}

export default UserMovieProvider
