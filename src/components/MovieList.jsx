import {useState} from "react";
import demo from "../assets/demo.jpg";
import { Link } from "react-router-dom";

const MovieList = ({data,rank,isTrending}) => {
    const [isHover,setHover] = useState(false) 
  return (
    <>
      {
          data.poster_path !== null &&
        <>
          <Link to={`/movie/${data.id}`} className="p-5 shrink-0 relative shadow-(--shadow)">
            <div
              className="relative  rounded-2xl overflow-hidden"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path}`}
                alt=""
                className={`lg:w-50 w-35 ${isHover && "scale-120"} rounded-2xl`}
              />
              {isHover && (
                <div className="absolute border bg-black/30 backdrop-blur-xs inset-0 rounded-2xl">
                  <div className="h-full flex flex-col gap-1 justify-end p-3">
                    <p className=" text-(--text) font-bold">{data.title}</p>
                    <p className="text-xs text-(--text-secondary)">
                      {data.overview.slice(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {isTrending && (
              <div className="absolute flex justify-center items-center bottom-0 right-0 w-[40%] h-[30%] bg-(--accent) rounded-full">
                <div className="font-heading text-4xl">{rank}</div>
              </div>
            )}
          </Link>
        </>
      }
    </>
  );
};

export default MovieList;
