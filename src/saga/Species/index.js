import { takeEvery, call, put, select } from "redux-saga/effects"
import { addSpecies, addSpeciesNextPage } from "../../redux/Species/actionCreator";
import {types} from "./actionTypes"

const getSpecies = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))
    return responce
};

export function* speciesWatcher (){
    yield takeEvery (types.SET_SPECIES, speciesWorker)
};

function* speciesWorker() {
  const result = yield call (getSpecies, "https://swapi.dev/api/species")
  yield put (addSpecies(result.results))
  yield put(addSpeciesNextPage(result.next))
};

export function* watcherSpeciesLoadMore() {
  yield takeEvery (types.LOAD_MORE_SPECIES, speciesWorkerLoadMore)
}

function* speciesWorkerLoadMore(){
  const page = yield select((state) => state.species.nextPage)
  const result = yield call(getSpecies, page);
  yield put(addSpecies(result.results));
  yield put(addSpeciesNextPage(result.next))
};