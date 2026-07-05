import React, { useEffect, useState } from 'react'
import axios from 'axios'


const useMovies = (movie_name,page) => {
    const [data,setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    useEffect(()=>{
        const fetchMovies = async()=>{
            setData([]);
            setLoading(true);
            const res = await axios.get(
              `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${movie_name}&page=${page}`,
            );
            
            // https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}
            setData(res.data);
            setLoading(false);
        }
        fetchMovies()
    },[movie_name,page])
  return {data,isLoading,setLoading}
}

export default useMovies
