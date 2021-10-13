import { types } from "./action"

const initialState = {
    people: [],
    nextPage: "",
    showMore: false,
    searchedPeople: [],
    isSearch: false
}

export const people = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PEOPLE:
            return {
                ...state,
                people: [...state.people, ...action.payload]
            }
        case types.ADD_PEOPLE_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }
        case types.SEARCH_PEOPLE_ITEM:
            return {
                ...state,
                searchedPeople: state.people.filter((item) => item.name.toLowerCase().includes(action.payload.trim().toLowerCase())),
                isSearch: action.payload.trim().length > 0 ? true : false
            }
        default: return state
    }
}