import { types } from "../People/action";

export const addPeople = (payload) => ({
    type: types.ADD_PEOPLE,
    payload,
})

export const addPeopleNextPage = (payload) => ({
    type: types.ADD_PEOPLE_NEXT_PAGE,
    payload
})

export const searchPeopleItem = (payload) => ({
    type: types.SEARCH_PEOPLE_ITEM,
    payload
})