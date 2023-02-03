import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/features/user/userSlice";
import movieReducer from "../components/features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
