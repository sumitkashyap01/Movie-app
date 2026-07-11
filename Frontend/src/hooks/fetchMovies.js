import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const useFetchMovies = (endpoint,page=1) => {
    const [data,setData] = useState(null)
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    
    useEffect(()=>{
        setData(null)
        const fetchMovies = async()=>{
            const res = await axios.get(
                `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&page=${page}`,
            );
        setData(res.data);
        
    }
    fetchMovies()
  },[endpoint,page])
  return data;
}

const useFetchImages = (id)=>{
    const cachedImages = useRef({})
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const [imgData, setImgData] = useState(null);
    const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;
    useEffect(() => {
        const preloadImages = (res)=>{
            const image  = new Image();
            const logo = new Image()
            image.src = `https://image.tmdb.org/t/p/original/${res?.backdrops[0]?.file_path}`
            logo.src = `https://image.tmdb.org/t/p/original/${res?.logos[0]?.file_path}`;

        }

        const fetchImages = async () => {
            const res = await axios.get(
                url,
            );
            cachedImages.current[id] = res.data
            setImgData(res.data);
            preloadImages(res.data);
        };


        const sendCacheImage = () => {
            // preloadImages();
            setImgData(cachedImages.current[id]);
      };

      if (cachedImages.current[id] === undefined) {
        fetchImages();
      }
      else{
        sendCacheImage();
      }
    }, [id]);
    return imgData;
}

export {useFetchMovies, useFetchImages}
