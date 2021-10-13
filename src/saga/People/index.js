import { takeEvery, call, put, select } from "redux-saga/effects"
import { addPeople, addPeopleNextPage } from "../../redux/People/actionCreator";
import {types} from "./actionTypes"

const getPeople = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))
    return responce
};

export function* peopleWatcher (){
    yield takeEvery (types.SET_PEOPLE, peopleWorker)
};

function* peopleWorker() {
  const result = yield call (getPeople, "https://swapi.dev/api/people")
  yield put (addPeople(result.results))
  yield put (addPeopleNextPage(result.next))
};

export function* watcherPeopleLoadMore() {
  yield takeEvery (types.LOAD_MORE_PEOPLE, peopleWorkerLoadMore)
}

function* peopleWorkerLoadMore(){
  const page = yield select((state) => state.people.nextPage)
  const result = yield call(getPeople, page);
  yield put(addPeople(result.results));
  yield put(addPeopleNextPage(result.next))
};