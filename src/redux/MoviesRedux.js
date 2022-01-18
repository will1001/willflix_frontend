import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getMovieStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMovieSuccess: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload;
    },
    getMovieFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteMovieStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMovieSuccess: (state, action) => {
      state.isFetching = false;
      state.movies.splice(
        state.movies.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteMovieFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateMovieStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMovieSuccess: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload;
    },
    updateMovieFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //CREATE
    addMovieStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMovieSuccess: (state, action) => {
      state.isFetching = false;
      state.movies.push(action.payload);
    },
    addMovieFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMovieStart,
  getMovieSuccess,
  getMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFailure,
  addMovieStart,
  addMovieSuccess,
  addMovieFailure,
} = MovieSlice.actions;

export default MovieSlice.reducer;
