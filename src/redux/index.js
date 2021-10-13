import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootSaga } from "../saga";
import {films} from "./Films/reducer"
import {people} from "./People/reducer"
import {planets} from "./Planets/reducer"
import {species} from "./Species/reducer"
import {starShips} from "./Starships/reducer"
import {vehicles} from "./Vehicles/reducer"

const reducer = combineReducers ({
    films,
    people,
    planets,
    species,
    starShips,
    vehicles
})

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleWare));


sagaMiddleWare.run(rootSaga)