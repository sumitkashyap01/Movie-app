import { createContext,useContext } from "react";

const MovieContext = createContext();
export default MovieContext

export function useMovieContext() {
  return useContext(MovieContext);
}
