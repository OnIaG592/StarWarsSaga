import { types } from "./action"

const initialState = {
    starShips: [],
    nextPage: "",
    showMore: false,
    searchedStarship: [],
    isSearch: false
}


export const starShips = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_STARSHIPS:
            return {
                ...state,
                starShips: [...state.starShips, ...action.payload]
            }
        case types.ADD_STARSHIPS_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }
        case types.SEARCH_STARSHIPS_ITEM:
            return {
                ...state,
                searchedStarship: state.starShips.filter((item) => item.name.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0 ? true : false
            }
        default: return state
    }
}