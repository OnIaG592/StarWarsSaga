import { types } from "./action"

const initialState = {
    species: [],
    nextPage: "",
    showMore: false,
    searchedSpecies: [],
    isSearch: false
}

export const species = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_SPECIES:
            return {
                ...state,
                species: [...state.species, ...action.payload]
            }
        case types.ADD_SPECIES_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }
        case types.SEARCH_SPECIES_ITEM:
            return {
                ...state,
                searchedSpecies: state.species.filter((item) => item.name.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0 ? true : false
            }
        default: return state
    }
}