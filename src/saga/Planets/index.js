import { takeEvery, call, put, select } from "redux-saga/effects"
import { addPlanets, addPlanetsNextPage } from "../../redux/Planets/actionCreator";
import {types} from "./actionTypes"

const getPlanets = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))
    return responce
};

export function* planetsWatcher (){
    yield takeEvery (types.SET_PLANETS, planetsWorker)
};

function* planetsWorker(){
  const result = yield call(getPlanets, "https://swapi.dev/api/planets/?page=1");
  yield put(addPlanets(result.results));
  yield put(addPlanetsNextPage(result.next))
};

export function* watcherLoadMore() {
  yield takeEvery (types.LOAD_MORE_PLANETS, planetsWorkerLoadMore)
}

function* planetsWorkerLoadMore(){
  const page = yield select((state) => state.planets.nextPage)
  const result = yield call(getPlanets, page);
  yield put(addPlanets(result.results));
  yield put(addPlanetsNextPage(result.next))
};