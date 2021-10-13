import { types } from "./action";

export const addFilms = (payload) => ({
    type: types.ADD_FILMS,
    payload
})

export const addFilmsNextPage = (payload) => ({
    type: types.ADD_FILMS_NEXT_PAGE,
    payload
})

export const searchFilmsItem = (payload) => ({
    type: types.SEARCH_FILMS_ITEM,
    payload
})