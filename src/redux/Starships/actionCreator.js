import { types } from "./action";

export const addStarShips = (payload) => ({
    type: types.ADD_STARSHIPS,
    payload
})

export const addStarshipsNextPage = (payload) => ({
    type: types.ADD_STARSHIPS_NEXT_PAGE,
    payload
})

export const searchStarShipItem = (payload) => ({
    type: types.SEARCH_STARSHIPS_ITEM,
    payload
})