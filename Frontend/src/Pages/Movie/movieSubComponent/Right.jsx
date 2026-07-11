import React from "react";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { useUserMovieContext } from "../../../Context/UserMovieContext/userMovieContext";

const Right = ({ movieDetails }) => {
    const {
      addToWatched,
      removeFromWatched,
      isWatched,
      addToWatchlist,
      removeFromWatchlist,
      inWatchlist,
    } = useUserMovieContext();
    const watched = isWatched(movieDetails)
    const watchlist = inWatchlist(movieDetails);

    console.log(watched);
    
  return (
    <>
      {movieDetails && (
        <>
          <button
            onClick={
              !watched
                ? () => addToWatched(movieDetails)
                : () => removeFromWatched(movieDetails)
            }
            className="flex items-center gap-2 bg-(--accent) text-black p-2 rounded-[10px] border border-white/20 hover:bg-(--accent-hover)"
          >
            <IoMdAdd />
            <span>{`${watched ? "watched" : "Mark as watched"}`}</span>
          </button>
          <button
            onClick={
              !watchlist
                ? () => addToWatchlist(movieDetails)
                : () => removeFromWatchlist(movieDetails)
            }
            className=" flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)"
          >
            {/* <CiHeart /> */}
            <IoMdAdd />

            <span>{`${watchlist ? "in watchlist" : "Add to watchlist"}`}</span>
          </button>
          <button className="flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)">
            <CiStar />
            Rate the movie
          </button>
          <button className="flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)">
            <MdOutlinePlaylistPlay />
            <span>Add to the list</span>
          </button>
        </>
      )}
    </>
  );
};

export default Right;
