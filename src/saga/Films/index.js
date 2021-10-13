import { takeEvery, call, put, select } from "redux-saga/effects"
import { addFilms, addFilmsNextPage } from "../../redux/Films/actionCreator";
import {types} from "./actionTypes"

const getFilms = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))

    return responce
};

export function* filmsWatcher (){
    yield takeEvery (types.SET_FILMS, filmsWorker)
};

function* filmsWorker() {
  const result = yield call (getFilms, "https://swapi.dev/api/films")
  console.log(result)
  yield put (addFilms(result.results))
  yield put (addFilmsNextPage(result.next))
};

export function* watcherFilmsLoadMore() {
  yield takeEvery (types.LOAD_MORE_FILMS, filmsWorkerLoadMore)
}

function* filmsWorkerLoadMore(){
  const page = yield select((state) => state.films.nextPage)
  const result = yield call(getFilms, page);
  yield put(addFilms(result.results));
  yield put(addFilmsNextPage(result.next))
};