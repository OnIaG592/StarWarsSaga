import { types } from "./action"

const initialState = {
    films: [],
    nextPage: "",
    showMore: false,
    searchedFilm: [],
    isSearch: false
}

export const films = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FILMS:
            console.log("aaaa", action.payload)
            return {
                ...state,
                films: [...state.films, ...action.payload]
            }
        case types.ADD_FILMS_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }
        case types.SEARCH_FILMS_ITEM:
            return {
                ...state,
                searchedFilm: state.films.filter((item) => item.title.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0 ? true : false
            }
        default: return state
    }
}