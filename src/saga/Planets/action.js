import { types } from "./actionTypes";

export const setPlanets = () => ({
    type: types.SET_PLANETS
})

export const planetsLoadMore = () => ({
    type: types.LOAD_MORE_PLANETS
})