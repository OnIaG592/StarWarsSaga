import { types } from "./actionTypes";

export const setFilms = () => ({
    type: types.SET_FILMS
})

export const filmsLoadMore = () => ({
    type: types.LOAD_MORE_FILMS
})