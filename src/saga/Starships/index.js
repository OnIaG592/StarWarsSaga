import { takeEvery, call, put, select } from "redux-saga/effects"
import { addStarShips, addStarshipsNextPage } from "../../redux/Starships/actionCreator";
import {types} from "./actionTypes"

const getStarShips = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))
    return responce
};

export function* starShipsWatcher (){
    yield takeEvery (types.SET_STARSHIPS,starShipsWorker)
};

function* starShipsWorker() {
  const result = yield call (getStarShips, "https://swapi.dev/api/starships")
  yield put(addStarShips(result.results))
  yield put(addStarshipsNextPage(result.next))
};

export function* watcherStarShipsLoadMore() {
  yield takeEvery (types.LOAD_MORE_STARSHIPS, starShipsWorkerLoadMore)
}

function* starShipsWorkerLoadMore(){
  const page = yield select((state) => state.starShips.nextPage)
  const result = yield call(getStarShips, page);
  yield put(addStarShips(result.results));
  yield put(addStarshipsNextPage(result.next))
};