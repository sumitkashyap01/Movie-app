import React from "react";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
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
  const watched = isWatched(movieDetails);
  const watchlist = inWatchlist(movieDetails);

  console.log(watched);

  return (
    <>
      {movieDetails && (
        <>
          <button
            onClick={
              !watched
                ? () => {
                    addToWatched(movieDetails);
                    removeFromWatchlist(movieDetails);
                  }
                : () => removeFromWatched(movieDetails)
            }
            className={`${watched ? "bg-(--accent) hover:bg-(--accent-hover) text-black active:bg-(--accent)" : "bg-(--surface) hover:bg-(--surface-hover) active:bg-(--surface) text-white "} flex items-center gap-2  p-2 rounded-[10px] border border-white/20 `}
          >
            {!watched ? <IoMdAdd /> : <FaCheck />}
            <span>{`${watched ? "Watched" : "Mark as watched"}`}</span>
          </button>
          {!watched && (
            <button
              onClick={
                !watchlist
                  ? () => addToWatchlist(movieDetails)
                  : () => removeFromWatchlist(movieDetails)
              }
              className={` ${watchlist ? "bg-(--accent) hover:bg-(--accent-hover) text-black active:bg-(--accent)" : "bg-(--surface) hover:bg-(--surface-hover) active:bg-(--surface) text-white "} flex items-center gap-2 p-2 rounded-[10px] border border-white/20`}
            >
              {/* <CiHeart /> */}
              {!watchlist ? <IoMdAdd /> : <FaCheck />}

              <span>{`${watchlist ? "in watchlist" : "Add to watchlist"}`}</span>
            </button>
          )}
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
