import { types } from "../Vehicles/action";

export const addVehicles = (payload) => ({
    type: types.ADD_VEHICLES,
    payload
})

export const addVehiclesNextPage = (payload) => ({
    type: types.ADD_VEHICLES_NEXT_PAGE,
    payload
})

export const searchVehiclesItem = (payload) => ({
    type: types.SEARCH_VEHICLES_ITEM,
    payload
})