import { all, fork } from "redux-saga/effects";
import { starforceSaga } from './starforce';

export default function* rootSaga() {
  yield all([fork(starforceSaga)]);
}