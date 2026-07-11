import React, { useState } from 'react'
import useMovies from '../hooks/movies';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { IoIosHeart } from "react-icons/io";

const Card = ({m_data}) => {
    const [isLoaded,setLoaded] = useState(false)
    const [hideHeart,setHideHeart] = useState("hide")
    const [showLike,setShowLike] = useState("hide")
  return (
    <div className="">
      {!isLoaded && (
        <div className="flex">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-50 h-60 bg-gray-200 rounded-2xl animate-pulse"></div>
            <p className="w-[70%] h-5 bg-gray-200 text-center text-lg font-semibold animate-pulse dark:text-white"></p>
          </div>
        </div>
      )}
      <div className={`w-50 ${isLoaded ? "block" : "hidden"}`}>
        <div
          className="relative"
          onMouseEnter={() => setHideHeart("show")}
          onMouseLeave={() => {setHideHeart("hide")
            setShowLike("hide")
          }}
        >
          {hideHeart === "show" && (
            <div
              className="absolute right-5 bottom-5 p-1 bg-white rounded-full"
              onMouseEnter={() => setShowLike("show")}
              onMouseLeave={() => setShowLike("hide")}
            >
              {showLike === "hide" ? (
                <CiHeart className=" text-black text-4xl p-1"></CiHeart>
              ) : (
                <IoIosHeart className=" text-red-400 text-3xl" />
              )}
            </div>
          )}
          <img
            className="w-50 rounded-2xl"
            src={
              m_data.poster_path || m_data.profile_path
                ? `https://image.tmdb.org/t/p/w500${m_data.poster_path || m_data.profile_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/960px-No-Image-Placeholder.svg.png?_=20200912122019"
            }
            alt="no poster"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <p className="text-center text-() text-lg font-semibold dark:text-white">
          {m_data.name || m_data.title}
        </p>
      </div>
    </div>
  );
}

export default Card
