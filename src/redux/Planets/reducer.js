import { types } from "./action"

const initialState = {
    planets: [],
    nextPage: "",
    showMore: false,
    searchedPlanet: [],
    isSearch: false
}

export const planets = (state = initialState,action) => {
    switch(action.type){
        case types.ADD_PLANETS:
            return {
                ...state,
                planets: [...state.planets,...action.payload],
            }
        case types.ADD_PLANETS_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }  
        case types.SEARCH_PLANETS_ITEM:
            return {
                ...state,
                searchedPlanet: state.planets.filter((item) => item.name.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0? true : false
            }  
        default: return state
    }
}