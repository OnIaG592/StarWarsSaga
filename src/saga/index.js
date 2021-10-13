import { spawn } from "@redux-saga/core/effects";
import {peopleWatcher, watcherPeopleLoadMore} from "./People"
import {filmsWatcher, watcherFilmsLoadMore} from "./Films"
import { planetsWatcher , watcherLoadMore} from "./Planets";
import { speciesWatcher, watcherSpeciesLoadMore } from "./Species";
import { starShipsWatcher, watcherStarShipsLoadMore } from "./Starships";
import { vehiclesWatcher, watcherVehiclesLoadMore } from "./Vehicles";

export function* rootSaga () {
    yield spawn(peopleWatcher)
    yield spawn(filmsWatcher)
    yield spawn(planetsWatcher)
    yield spawn(speciesWatcher)
    yield spawn(starShipsWatcher)
    yield spawn(vehiclesWatcher)
    yield spawn(watcherLoadMore)
    yield spawn(watcherFilmsLoadMore)
    yield spawn(watcherPeopleLoadMore)
    yield spawn(watcherSpeciesLoadMore)
    yield spawn(watcherStarShipsLoadMore)
    yield spawn(watcherVehiclesLoadMore)
}

