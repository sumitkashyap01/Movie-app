import { createContext, useContext } from "react";

export const userMovieContext  = createContext();

export const useUserMovieContext = ()=> useContext(userMovieContext)