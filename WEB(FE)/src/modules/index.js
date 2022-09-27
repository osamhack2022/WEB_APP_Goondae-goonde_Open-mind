import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { authSaga } from './auth';
import { userSaga } from './user';

const rootReducer = combineReducers({});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
