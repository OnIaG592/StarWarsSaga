import { types } from "../Planets/action";

export const addPlanets = (payload) => ({
    type: types.ADD_PLANETS,
    payload,
})

export const addPlanetsNextPage = (payload) => ({
    type: types.ADD_PLANETS_NEXT_PAGE,
    payload
})

export const searchItem = (payload) => ({
    type: types.SEARCH_PLANETS_ITEM,
    payload
})