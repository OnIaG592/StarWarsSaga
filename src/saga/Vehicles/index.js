import { takeEvery, call, put,select } from "redux-saga/effects"
import { addVehicles, addVehiclesNextPage } from "../../redux/Vehicles/actionCreator";
import {types} from "./actionTypes"

const getVehicles = async(url) => {
    const responce = await fetch(url)
    .then (res=>res.json())
    .catch(e=>console.log(e))
    return responce
};

export function* vehiclesWatcher (){
    yield takeEvery (types.SET_VEHICLES,vehiclesWorker)
};

function* vehiclesWorker() {
  const result = yield call (getVehicles, "https://swapi.dev/api/vehicles")
  yield put(addVehicles(result.results))
  yield put(addVehiclesNextPage(result.next))
};


export function* watcherVehiclesLoadMore() {
  yield takeEvery (types.LOAD_MORE_VEHICLES, vehiclesWorkerLoadMore)
}

function* vehiclesWorkerLoadMore(){
  const page = yield select((state) => state.vehicles.nextPage)
  const result = yield call(getVehicles, page);
  yield put(addVehicles(result.results));
  yield put(addVehiclesNextPage(result.next))
};