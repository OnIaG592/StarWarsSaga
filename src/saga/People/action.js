import { types } from "./actionTypes";

export const setPeople = () => ({
    type: types.SET_PEOPLE
})

export const peopleLoadMore = () => ({
    type: types.LOAD_MORE_PEOPLE
})