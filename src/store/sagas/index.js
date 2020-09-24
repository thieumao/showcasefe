import { all, takeEvery } from 'redux-saga/effects';
import { UPDATE_PART } from '../actionTypes/ets2020ActionType';
import { updatePartSaga } from './ets2020';

export default function* rootSaga() {
  yield all([takeEvery([UPDATE_PART], updatePartSaga)]);
}
