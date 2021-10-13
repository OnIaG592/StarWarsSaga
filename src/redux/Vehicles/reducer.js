import { types } from "./action"

const initialState = {
    vehicles: [],
    nextPage: "",
    showMore: false,
    searchedVehicles: [],
    isSearch: false
}


export const vehicles = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_VEHICLES:
            return {
                ...state,
                vehicles: [...state.vehicles, ...action.payload]
            }
        case types.ADD_VEHICLES_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }
        case types.SEARCH_VEHICLES_ITEM:
            return {
                ...state,
                searchedVehicles: state.vehicles.filter((item) => item.name.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0 ? true : false
            }
        default: return state
    }
}