import { publicRequest, userRequest } from "../requestMethods";

import {
  getListFailure,
  getListStart,
  getListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
  addListFailure,
  addListStart,
  addListSuccess,
} from "./ListsRedux";

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} from "./AuthsRedux";

import { getMovieFailure, getMovieStart, getMovieSuccess } from "./MoviesRedux";

//lists
export const getLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res = await userRequest.get("/lists");
    dispatch(getListSuccess(res.data));
  } catch (err) {
    dispatch(getListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await userRequest.delete(`/lists/${id}`);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

export const updateList = async (id, List, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await userRequest.put(`/lists/${id}`, List);
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};
export const addList = async (List, dispatch) => {
  dispatch(addListStart());
  try {
    const res = await userRequest.post(`/lists`, List);
    dispatch(addListSuccess(res.data));
  } catch (err) {
    dispatch(addListFailure());
  }
};

export const getMovie = async (id, dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await userRequest.get("/movies/find/" + id);
    dispatch(getMovieSuccess(res.data));
  } catch (err) {
    dispatch(getMovieFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log("err.response");
    console.log(err.response);
    dispatch(registerFailure());
  }
};

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const authLogout = async (dispatch) => {
  dispatch(logout());
};
