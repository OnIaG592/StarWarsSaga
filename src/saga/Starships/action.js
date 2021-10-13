import { types } from "./actionTypes";

export const setStarShips = () => ({
    type: types.SET_STARSHIPS
})

export const starShipsLoadMore = () => ({
    type: types.LOAD_MORE_STARSHIPS
})