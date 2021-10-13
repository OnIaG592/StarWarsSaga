import { types } from "../Species/action";

export const addSpecies = (payload) => ({
    type: types.ADD_SPECIES,
    payload
})

export const addSpeciesNextPage = (payload) => ({
    type: types.ADD_SPECIES_NEXT_PAGE,
    payload
})

export const searchSpeciesItem = (payload) => ({
    type: types.SEARCH_SPECIES_ITEM,
    payload
})