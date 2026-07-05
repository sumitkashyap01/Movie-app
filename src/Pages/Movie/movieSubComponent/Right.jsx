import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlinePlaylistPlay } from "react-icons/md";

const Right = ({movieDetails}) => {
  return (
    <>

{ 
  movieDetails &&      
  <>
      <button className="flex items-center gap-2 bg-(--accent) text-black p-2 rounded-[10px] border border-white/20 hover:bg-(--accent-hover)">
        <IoMdAdd />
        <span>Add to watchlist</span>
      </button>
      <button className=" flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)">
        <CiHeart />
        <span>like</span>
      </button>
      <button className="flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)">
        <CiStar />
        Rate the movie
      </button>
      <button className="flex items-center gap-2 bg-(--surface) p-2 rounded-[10px] border border-white/20 hover:bg-(--surface-hover)">
        <MdOutlinePlaylistPlay />
        <span>Add to the list</span>
      </button>
      
      </>}
    </>
  );
}

export default Right
